const booksController = require('../controllers/book.controller.js');
// const booksModel = require('../models/mongoos/test/book.model.js');

module.exports = {

    ...booksController,
    // ...booksModel,
    // // col: 'books',
    // getbooks : async function(req, res){
    //     // const mongoose = require('../mxp/mongoos');
    //     // const jsn = 
    //     // // "[{\"id\":1,\"title\":\"golem\",\"writer\":\"gnostic\",\"price\":444,\"rating\":4.6}]";
    //     // await mongoose.find({},'books');
    //     // const arr = await JSON.parse(jsn);
    //     // await res.send(
    //     //     arr
    //     //     );

    //     console.log(`in books controller`);

    //     // if (this.routes.protect(req,res)){
    //     try {
    //         await this.routes.protect(req,res);

    //         console.log(`passed protect line in books controller`);

    //         const db = 
    //         require('../db/db');
        
    //         // mongoose.mongs;
        
    //         const 
    //         // jsn 
    //         arr
    //         = 
    //         await db(req,res,'find',{},
    //         // {
    //             // col:
    //             'books'
    //         // }
    //         );
    //         // const arr = await JSON.parse(jsn); 
    //         await console.log('got in backend books function:', 
    //         arr
    //         // jsn
    //         );
    //         return await 
    //         arr;
    //         // jsn;
    //     } catch(er){
    //     // } else {
    //         // return {error:er.message};
    //         throw Error(er.message)
    //     }
    // },
    // postbooks: async function(req, res,q){
    //     const db = require('../db/db');
    //     arr = await db(req,res,'ins',q,'books')
    //     return {
    //         _id:    arr._id     ||  undefined,
    //         id:     arr.id      ||  arr.length+1|| 2,
    //         title:  arr.title   ||  q.title     ||  'worked',
    //         writer: arr.writer  ||  q.writer    ||  'worked',
    //         price:  arr.price   ||  q.price     ||  69,
    //         rating: arr.rating  ||  q.rating    ||  4.20
    //     };
    // }
}