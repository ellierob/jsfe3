const auth = require('./auth.js');
const login = require('./login.js');
const logout = require('./logout.js');
const signup = require('./signup.js');
const protect = require('../middleWare/tokenCheck.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userDB = require('../models/mongoos/test/user.model.js');
// const { db } = require('../models/mongoos/test/books.js.bak');
// const cookie = require('cookie-parser');

module.exports = {
    ...userDB,
    // ...auth,
    auth,
    // poshthome: userDB.userModel.login,
    // poshthome: login.posthome,
    ...login,
    // postsignup: userDB.userModel.signup,
    // postsignup: signup.postsignup,
    ...signup,
    ...protect,
    ...logout,
    bcrypt,
    cookie
        : require('cookie-parser')
    , jwt
        : require('jsonwebtoken')
    ,
}