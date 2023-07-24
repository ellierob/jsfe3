// const e = require('express');
const booksDB = require('../models/mongoos/test/book.model.js');

module.exports = {
    ...booksDB,
    // col: 'books',
    getbooks : async function(req, res){
        // const mongoose = require('../mxp/mongoos');
        // const jsn = 
        // // "[{\"id\":1,\"title\":\"golem\",\"writer\":\"gnostic\",\"price\":444,\"rating\":4.6}]";
        // await mongoose.find({},'books');
        // const arr = await JSON.parse(jsn);
        // await res.send(
        //     arr
        //     );

        console.log(`in book controller`);

        // if (this.routes.protect(req,res)){
        try {
            const user = await this.routes.protect(req,res);

            console.log(`passed protect line in books controller`);

            // const db = 
            // require('../db/db');
            const model = this.routes.bookModel;
            try{await this.routes.bookConnect();} catch(er){console.log(er.message);}

            // mongoose.mongs;
        
            let 
            // jsn 
            arr
            = 
            await model.find({}
                ,(err,data)=>{
                    if(!err){
                        return data;
                    } else {
                        throw Error(err.message);
                    }
                }
            ).clone();
            // await db(req,res,'find',{},
            // // {
            //     // col:
            //     'books'
            // // }
            // );
            // const arr = await JSON.parse(jsn);
            
            await console.log(`books found:`, arr);

            arr = await arr.filter(arr=> !arr.blocked.includes(user._id) || arr.allowed.includes('*') && arr.allowed.includes(user._id) || arr.addedBy===user._id);

            await console.log(`books after being filtered:`, arr);

            await console.log('got in backend books function:', 
            arr
            // jsn
            );
            return await 
            arr;
            // jsn;
        } catch(er){
        // } else {
            // return {error:er.message};
            throw Error(er.message)
        }
    },
    postbooks: async function(req, res,qO){
        const user = await this.routes.protect(req,res);
        await console.log(`user in postbooks:`, user);
        const model = await this.routes.bookModel;
        // const db = require('../db/db');
        const arr = 
        await model.create({
            ...qO,
            addedBy:user._id,
            blocked:user.blocked,
            allowed:user.allowed,
        }, 
            // (err,data)=>{
            //     if(!err) {
            //         return data;
            //     } else {
            //         throw Error(err.message);
            //     }
            // }
        );
        // await db(req,res,'ins',q,'books')

        await console.log(`books array in books:`, arr);
        
        await user.addedBooks.concat(arr._id);
        await user.save();

        await console.log(`book in postbooks:`, arr);

        return await {
            _id:    arr._id     ||  undefined,
            id:     arr.id      ||  arr.length+1|| 2,
            title:  arr.title   ||  q.title     ||  'worked',
            writer: arr.writer  ||  q.writer    ||  'worked',
            price:  arr.price   ||  q.price     ||  69,
            rating: arr.rating  ||  q.rating    ||  4.20
        };
    }
}