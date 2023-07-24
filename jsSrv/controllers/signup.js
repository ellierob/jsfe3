// const auth = require('./auth');
// const User = require('../models/mongoos/test/users')
// const fs = require('fs');
// const promise = require('promise');
// const qp = require('querystring');
// // let func= {
module.exports = {
    args: {fs:'what'},
    getsignup: async function(req,res, qO) {
        //let writeup = 
        console.log(`entered login get route function`);
        // return ['something'];
        // await 
        // let that = this.routes.fs;
        // console.log('caller:',that);
        // console.log(`fs:`,this.routes.fs);
        // res.end();
        this.routes.fs.readFile("./routes/login.html", "utf8", async function(err,data){
            if(err!==null){
                console.log(err);
                res.write(`couldn't read`);
                res.end();
                return [`couldn't read`];
            } else {
                // return [`something`];
                let d = 
                await 
                [data];
                res.write(data);
                res.end();
            }
        })
    },
    
    postsignup: 
    // } else if(req.url.startsWith("/home")){
    async function(req,res, data){
        try {
            const password = data.password;
            const email = data.email;
            const phone = data.phone;
            const name = data.name;

            console.log('in postsignup:', data);

            if(email===undefined||'' && phone===undefined||''){
                throw Error(`Enter Email /phone /both`);
            }

            const validator = require('validator');

            if(!validator.isEmail(email)){
                throw Error('Enter a valid Email');
            }
            
            if(!validator.isStrongPassword(password)){
                throw Error('Password must be at least 8 character and include special characters');
            }

            try{await this.routes.userConnect();} catch(er){console.log(er.message);}
            const model = this.routes.userModel;

            const alreadyExists = await model.find({email:email}) + await model.find({phone:phone});

            // const db = require('../db/db');
            // // console.log('this', this);
            // const alreadyExists = await db(req,res,'find',{email:email},'users') + await db(req,res,'find',{phone:phone},'users');

            await console.log('alreadyexist:', alreadyExists);
            // this.findOne({email}) || await this.findOne({phone});
            if(await alreadyExists.length){
                throw Error('Email or phone already in use!');
            }

            
            const bcrypt = require('bcrypt');

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password,salt);

            const user = 
            await model.create(
                // [
                {
                // await db(req,res,'ins',{
                    name, email, phone,
                    password
                    : hash
                // },'users')
                }
                // ]
                ,
                // async (err,data)=>{if(!err){return await data;}else{throw await Error(err.message);}}
            );

            await console.log(`user in signup:`, user);

            // // puts user id in payload of token
            // const token = await this.routes.crtToken(req,res,user._id);
            // await console.log(`in signup controller:`, token);
            // // try{
            // //     // const user = await User.signup(data);
            // //     // res.status(200);
            // //     // return await user;
            // // } catch (er){
            // //     throw Error(er.message)
            // // }

            // try{
            //     await res.cookie(token);
            //     console.log(`cookie sent:`, req.headers.cookie);
            // } catch (er){
            //     throw Error(er.message)
            // }

            return {
                name: user.name, 
                stat: 'login',
                // token
            }
            // return 'login';
        } catch(err){
            // res.status(400);
            throw Error(err.message);
        }
    },

    // optionshome: async ()=>{console.log(this);return await this;}
}

// // func['get']('');