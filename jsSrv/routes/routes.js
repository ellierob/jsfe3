const fs = require('fs');
const qp = require('querystring');
const pth = require('path');

const supeRoot = //"/";
pth.join(
    // javascript current directory
    __dirname, 
    // relative path
    `/../../`
    );

const userRoutes = require('./user.routes.js');
const bookRoutes = require('./book.routes.js');
// const user = require('../controllers/user.js');
// const login = require('../controllers/login.js');
// const signup = require('../controllers/signup.js');
// const books = require('../controllers/books.js');

// routes.args={fs:fs,qp:qp};

module.exports = {
    ...userRoutes,
    ...bookRoutes,
    // ...user,
    // ...login,
    // ...signup,
    // ...books,
    wrongReq:
    async function(res){
        // return [{error:'Invalid request'}];
        return 'Invalid request';
        // res.write('Invalid request!');
        // res.end();
    },
    fs,
    qp,
}