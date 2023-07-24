// const auth = require('../controllers/auth.js');
// const login = require('../controllers/login.js');
// const signup = require('../controllers/signup.js');
// const protect = require('../middleWare/tokenCheck.js');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const cookie = require('cookie-parser');

const userController = require('../controllers/user.controller.js');
// const userModel = require('../models/mongoos/test/user.model.js');

module.exports = {
    ...userController,
    // model: 
    // userDB,
    // ...userDB,
    // ...auth,
    // ...login,
    // ...signup,
    // ...protect,
    // bcrypt,
    // cookie
    // : require('cookie-parser')
    // , jwt
    // : require('jsonwebtoken')
    // ,
    // crtToken: async (req,res,id)=>{
    //     const token = await jwt.sign(
            
    //         // jwt automatically adds header
    //         // {},
            
    //         // unique payload
    //         {_id: id},
            
    //         // secret
    //         `${process.env.SECRET}`,
    //         // {secret: },
            
    //         // options
    //         { expiresIn: '3d'}
    //         );
        
    //     const db = require('../db/db.js');
    //     const oldUser = await db(res,req,'find',{_id:id});
    //     console.log(`oldUser:`, oldUser);
    //     await db(req,res,'upd',{filter:{_id:id},key:'tokens',
    //     newValue:[token,...oldUser['tokens']]});

    //     return await token;
    // }
}