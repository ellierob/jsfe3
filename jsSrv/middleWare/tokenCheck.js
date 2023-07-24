// const jwt = require('jsonwebtoken');

const { cookie } = require("../controllers/user.controller");

// const { data } = require("jquery");

// const asHandle = require('express-async-handler');

const crtToken = async function (req,res,id){
    const token = await this.jwt.sign(
        
        // jwt automatically adds header
        // {},
        
        // unique payload
        {_id: id},
        
        // secret
        `${process.env.SECRET}`,
        // {secret: },
        
        // options
        { expiresIn: '3d'}
        );
    
    const model = this.userModel;
    try{await this.userConnect();} catch(er){console.log(er.message);}

    const [oldUser] = 
    // await db(res,req,'find',{_id:id});
    await model.find({_id:id},
        (err,data)=>{if(!err){return data}else{return err.message}}
    ).clone();
    console.log(`oldUser:`, oldUser);
    // await model.upd
    
    oldUser.tokens = await oldUser.tokens.concat({token:token});
    await oldUser.save();
    // await db(req,res,'upd',{filter:{_id:id},key:'tokens',
    // newValue:[token,...oldUser['tokens']]});
    
    // const db = require('../db/db.js');
    // const oldUser = await db(res,req,'find',{_id:id});
    // console.log(`oldUser:`, oldUser);
    // await db(req,res,'upd',{filter:{_id:id},key:'tokens',
    // newValue:[token,...oldUser['tokens']]});

    return await token;
}

const protect = 
    // asHandle(
        async function (req, res, next=null){
    let token;
    // if(req.headers !== undefined){
    // // try {
        // let cookie = require('cookie-parser');
        // await cookie();
        // await console.log(`request cookie: ${req.cookies}`);
        await console.log(`request cookie: ${req.headers.cookie}`);
    //     console.log(`rwquest headers: ${JSON.stringify(req.headers)}`);
    if(await req.headers.cookie !== undefined){
        await console.log(`request cookie: ${req.headers.cookie}`);
        if(req.headers.cookie.split('; ').filter(cookie=>cookie.startsWith('token'))){
            token = req.headers.cookie.split('; ').filter(cookie=>
                cookie.startsWith('token'))[0].split('=')[1]
            
            const decoded = 
            // this.routes.jwt.verify(token, process.env.SECRET);
            await this.jwt.verify(token, `${process.env.SECRET}`);
            
            console.log(`decoded:`, decoded);
            
            try{await this.userConnect();} catch(er){console.log(er.message);}
            const model = this.userModel;
            const user = await model.findById(decoded._id,async (err,data)=>{
                if(err){
                    return await err.message;
                } else {
                    return await data;
                }
            }).clone();

            await console.log(`user in protect: \n`, user);

            // let db = require('../db/db.js');
            // const user = await db(req,res,'find',{_id:token._id});

            // const { password, ...usr } = await user;

            await console.log(`usr in protect: \n`, user);

            // req.user = usr;

            return await user;
        }
    } else if(req.headers.authorization !== undefined){
    // try{
        console.log(`request headers authorization: ${req.headers.authorization}`);
        if(req.headers.authorization.startsWith('Bearer')){
        // try{
        //     req.headers.authorization.startsWith('Bearer')
        try {
            token = req.headers.authorization.split(' ')[1];
            
            // console.log(this);

            const decoded = 
            // this.routes.jwt.verify(token, process.env.SECRET);
            await this.jwt.verify(token, `${process.env.SECRET}`);
            
            console.log(`decoded:`, decoded);
            
            try{await this.userConnect();} catch(er){console.log(er.message);}
            const model = this.userModel;
            const user = await model.findById(decoded._id,async (err,data)=>{
                if(err){
                    return await err.message;
                } else {
                    return await data;
                }
            }).clone();

            await console.log(`user in protect: \n`, user);

            // let db = require('../db/db.js');
            // const user = await db(req,res,'find',{_id:token._id});

            // const { password, ...usr } = await user;

            await console.log(`usr in protect: \n`, user);

            // req.user = usr;

            return user;

        } catch (er) {
            // res.status(401);
            console.log(`wrong token`);
            throw Error(er.message);
        }

        if(!token) {
            console.log(`no token`);
            // res.status(401);
            throw Error('not authenticated, no token');
        }
    } else {
    // } catch (er) {
        throw new Error('request header authorization not of type bearer token');
        // throw Error(er.message);
        // return {error:}
    }
    // } catch(er) {
    } else {
        // throw Error(er.message);
        throw Error('no request headers authorization');
        // return false;
    }
    // } catch (er) {
    // } else {
    //     throw Error('now request headers');
    //     // throw Error(er.message);
    // }
}
// )

const rmvToken = async function (
    req,res,
    // logoutToken
    ){

        let token;

        await console.log(`request cookie: ${req.headers.cookie}`);

        if(await req.headers.cookie !== undefined){
            await console.log(`request cookie: ${req.headers.cookie}`);
            if(req.headers.cookie.split('; ').filter(cookie=>cookie.startsWith('token'))){
                token = req.headers.cookie.split('; ').filter(cookie=>
                    cookie.startsWith('token'))[0].split('=')[1]
                
                const decoded = 
                await this.jwt.verify(token, `${process.env.SECRET}`);
                
                console.log(`decoded:`, decoded);
                const model = this.userModel;
                try{await this.userConnect();} catch(er){console.log(er.message);}
                const [user] = await model.find({_id:decoded._id},
                    (er,data)=>{
                        if(!er){
                            return data;
                        } else {
                            throw Error(er.message);
                        }
                    }
                    ).clone();
                
                await user.tokens.pull({token:token});
                await user.save();
            }
        } else if(req.headers.authorization !== undefined){

            console.log(`request headers authorization: ${req.headers.authorization}`);
            if(req.headers.authorization.startsWith('Bearer')){

            try {
                token = req.headers.authorization.split(' ')[1];

                const decoded = 
                await this.jwt.verify(token, `${process.env.SECRET}`);
                
                console.log(`decoded:`, decoded);
                const model = this.userModel;
                try{await this.userConnect();} catch(er){console.log(er.message);}
                const [user] = await model.find({_id:decoded._id},
                    (er,data)=>{
                        if(!er){
                            return data;
                        } else {
                            throw Error(er.message);
                        }
                    }
                    ).clone();
                
                await user.tokens.pull({token:token});
                await user.save();

            } catch (er) {
                // res.status(401);
                console.log(`wrong token`);
                throw Error(er.message);
            }

            if(!token) {
                console.log(`no token`);
                // res.status(401);
                throw Error('not authenticated, no token');
            }
        } else {
        // } catch (er) {
            throw new Error('request header authorization not of type bearer token');
            // throw Error(er.message);
            // return {error:}
        }
        // } catch(er) {
        } else {
            // throw Error(er.message);
            throw Error('no request headers authorization');
            // return false;
        }
        // } catch (er) {
        // } else {
        //     throw Error('now request headers');
        //     // throw Error(er.message);
        // }


    const decoded = await this.jwt.verify(token, `${process.env.SECRET}`);
    const model = this.userModel;
    try{await this.userConnect();} catch(er){console.log(er.message);}
    const [user] = await model.find({_id:decoded._id},
        (er,data)=>{
            if(!er){
                return data;
            } else {
                throw Error(er.message);
            }
        }
        ).clone();
    
    await user.tokens.pull({token:token});
    await user.save();
    
    // let token;
    // if(req.headers !== undefined){
    // // try {
    //     console.log(`rwquest headers: ${JSON.stringify(req.headers)}`);
    //     if(req.headers.authorization !== undefined){
    //     // try{
    //         console.log(`request headers authorization: ${req.headers.authorization}`);
    //         // if(req.headers.authorization.startsWith('Bearer')){
    //         try{
    //             req.headers.authorization.startsWith('Bearer')
    //             try {
        
                    
        
    //                 token = req.headers.authorization.split(' ')[1];
                    
    //                 // console.log(this);

    //                 const decoded = 
    //                 // this.routes.jwt.verify(token, process.env.SECRET);
    //                 this.jwt.verify(token, `${process.env.SECRET}`);
                    
    //                 console.log(`decoded:`, decoded);
                    
    //                 try{await this.userConnect();} catch(er){console.log(er.message);}
    //                 const model = this.userModel;
    //                 const user = await model.find({_id:decoded._id},async (err,data)=>{
    //                     if(err){
    //                         return await err.message;
    //                     } else {
    //                         return await data;
    //                     }
    //                 }).clone();

    //                 // let db = require('../db/db.js');
    //                 // const user = await db(req,res,'find',{_id:token._id});
        
    //                 const { password, ...usr } = user;
        
    //                 req.user = usr;
        
    //             } catch (er) {
    //                 // res.status(401);
    //                 console.log(`wrong token`);
    //                 throw Error(er.message);
    //             }
        
    //             if(!token) {
    //                 console.log(`no token`);
    //                 // res.status(401);
    //                 throw Error('not authenticated, no token');
    //             }
    //         // } else {
    //         } catch (er) {
    //             // throw new Error('request header authorization not of type bearer token');
    //             throw Error(er.message);
    //             // return {error:}
    //         }
    //     // } catch(er) {
    //     } else {
    //         // throw Error(er.message);
    //         throw Error('no request headers authorization');
    //         // return false;
    //     }
    // // } catch (er) {
    // } else {
    //     throw Error('now request headers');
    //     // throw Error(er.message);
    // }
}

module.exports = {
    protect,
    crtToken,
    rmvToken,
}