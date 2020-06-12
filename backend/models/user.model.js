const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        minlength : 5
    },

    password : {
        type : String,
        required : true,
        minlength : 8,
    }
},
{
    timestamps : true
})


const User = mongoose.model('User', userSchema);


module.exports = User;