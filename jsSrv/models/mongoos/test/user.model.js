const mongs = require('mongoose');
const { bcrypt, jwt } = require('../../../controllers/user.controller.js');
const mongoos = require('../../../db/mongoos.js');
const userConnect = async ()=>{await mongoos.modelConnect('test')};
const userDisconnect = async()=>{await mongoos.disconnect()};
// const bcrypt = require('bcrypt');

let schm = new mongs.Schema({
    // _id: Number, 
    name: {
        type: String,
    }, 
    email: {
        type: String,
        unique: true,
        // required: function() { return this.phone!==null }
    }, 
    phone: {
        type: Number,
        unique: true,
        // required: function() { return this.phone!==null }
    }, 
    password: {
        type: String,
        required: [ 
            true, 
            // message for empty submission
            'Please enter a password'
        ],
    },
    addedBooks: [{
        type: mongs.Schema.Types.ObjectId,
        required: [true,],
        // reference model /collection
        ref: 'books',
    }],
    followedBooks: [{
        type: mongs.Schema.Types.ObjectId,
        required: [true,],
        // reference model /collection
        ref: 'books',
    }],
    followed: [{
        type: mongs.Schema.Types.ObjectId,
        required: [true,],
        // reference model /collection
        ref: 'users',
    }],
    allowed: [{
        type: mongs.Schema.Types.ObjectId,
        required: [true,],
        // reference model /collection
        ref: 'users',
    }],
    blocked: [{
        type: mongs.Schema.Types.ObjectId,
        required: [true,],
        // reference model /collection
        ref: 'users',
    }],
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]
},{
    versionKey:false,
    timestamps: true
});

// schm.pre('save', async function(next){
//     console.log(`Hi this is pre`);
//     if(this.isModified('password')){
//         console.log(`this is pre password`);
//         this.password = await bcrypt.hash(this.password, 12);
//         this.cpassword = await bcrypt.hash(this.password, 12);
//     }
// })

schm.method.crtToken = async function(){
    //
    try {
        let newToken = await jwt.sign(
            {_id:this._id}, 
            process.env.SECRET,
            {
                expiresIn: '3d'
            }    
        );
        this.tokens = await this.tokens.concat({token:newToken});
        await this.save();
        return await newToken;
    } catch (er) {
        throw Error(er.message);
    }
}

// schm.statics.signup = async function (
//     // password,email,phone,name
//     data
//     ){
//     const password = data.password;
//     const email = data.email;
//     const phone = data.phone;
//     const name = data.name;
//     if(email===undefined && phone===undefined){
//         throw Error(`Enter Email /phone /both`);
//     }
//     console.log('this', this);
//     const alreadyExists = await this.findOne({email}) || await this.findOne({phone});
//     if(alreadyExists){
//         throw Error('Email already in use!');
//     }
//     // const salt = await bcrypt.genSalt(10);
//     // const hash = await bcrypt.hash(password,salt);
    
//     const user = await this.create({
//         name, email, phone,
//         password
//         // : hash
//     })

//     return user;
// }

const userModel =
mongs.model('users', schm);

// default export
module.exports = 
{   
    // userConnect: mongoos.modelConnect('test'),
    userConnect,
    userDisconnect,
    // userModel: mongs.model('users', schm),
    userModel,
}
// ;
// userModel;