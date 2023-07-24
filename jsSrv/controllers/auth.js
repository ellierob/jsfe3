// const mongoose = require('../mxp/mongoos');

module.exports = 
// {   
//     auth:
        async function(req, res, creds){
        console.log(`received parameters:`, creds);
        // const mongoose = 
        // require('../../../mxp/mongoos');
        // const db = 
        // require('../db/db');

        // console.log(`in auth:`, this);
        
        const model = this.userModel;
        try{await this.userConnect();} catch(er){console.log(er.message);}
        // mongoose.mongs;

        const 
        // jsn = 
        arr =
        await model.find({name:creds.name}
            , (err,data)=>{if(!err){return data;}else{throw Error(err.message);}}
            ).clone();
        // await mongoose.find({name:user},'users');
        // await db(req,res,'find',{name:creds.name},
        // // {
        //     // col:
        //     'users'
        // // }
        // );
        console.log(`arr in auth:`, arr);
        // const arr = await JSON.parse(jsn);
        // await console.log(arr);
        if (arr.length>=1){
            const passwd = await arr[0].password;

            const bcrypt = require('bcrypt');
            
            // hashes the login password
            // const salt = await bcrypt.genSalt(10);
            // const hash = await bcrypt.hash(creds.password, salt)
            
            // compares login password with database hashed signup password
            const match = await bcrypt.compare(creds.password, passwd)

            if (!match){
                throw Error('Incorrect password');
            } else {
                console.log(`bcrypt match info returns:`, match);
                // const token = this.routes.crtToken(arr[0]._id);
                // await console.log(`in auth controller:`, token);
                // res.cookie(token);

                return await 
                arr[0];
                // passwd===hash;
            }
        } else {
            // return false;
            throw Error('No one with that name');
        }
        // if jsn
        // const passwd = JSON.parse(jsn)[0].password;
        // return passwd ===pass;
        // return this;
    }
// }