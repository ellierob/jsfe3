// const { default: mongoose } = require('mongoose');
const mongs = require('mongoose');
const mongoos = require('../../../db/mongoos.js');
const bookConnect = async ()=>{await mongoos.modelConnect('test')};
const bookDisconnect = async()=>{await mongoos.disconnect()};

let schm = new mongs.Schema({
    // _id: Number, 
    id: Number,
    title: String, 
    writer: String,
    price: Number,
    rating: Number,
    addedBy: {
        type: mongs.Schema.Types.ObjectId,
        required: [true,],
        // reference model /collection
        ref: 'users',
    },
    blocked: [{
            type: mongs.Schema.Types.ObjectId,
            required: [true,],
            // reference model /collection
            ref: 'users',
    }],
    viewers: [{
            type: mongs.Schema.Types.ObjectId,
            required: [true,],
            // reference model /collection
            ref: 'users',
    }]
},
{
    versionKey:false,
    timestamps: true,
});

const bookModel = mongs.model('books', schm);

// default export
module.exports = {
    bookConnect,
    bookDisconnect,
    bookModel,
}