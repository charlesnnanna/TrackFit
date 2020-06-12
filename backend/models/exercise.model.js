const mongoose = require('mongoose');
const User = require('../models/user.model')

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    user : {type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    description : {type: String, required : true},
    duration : {type : Number, required : true},
    date : {type : Date, required : true}
})

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;