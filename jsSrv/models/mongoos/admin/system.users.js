const mongs = require('mongoose');

let schm = new mongs.Schema({
    // _id: Number, 
    name: String, 
    password: String
},{versionKey:false});

// default export
module.exports = mongs.model('employees', schm);