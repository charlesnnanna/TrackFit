const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.get_all_user = (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json({ Error : err}))
}

exports.get_single_user = (req, res) => {
    const id = req.params.userId
    User.findById(id)
    .then(user => {
        if(user === null){
            return res.status(400).json({
                message : "User doesn't exist or may have been deleted"
            })
        }
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(400).json(err)
    })
}

exports.add_new_user = (req, res) => {
    User.find({username : req.body.username})
    .exec()
    .then((user) => {
        if(user.length >= 1){
            res.status(409).json({
                message : "Registration failed, User already exist"
            })

        } else{
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err){
                    res.status(500).json({
                        Error : err
                    })
                } else{
                    const newUser = new User({
                        _id : new mongoose.Types.ObjectId(),
                        username : req.body.username,
                        password : hash
                    })
                    
                  newUser.save()
                 .then((docs) => {
                    res.status(200).json({
                        message : "User added",
                        User : docs
                    })
                    console.log(docs); 
                 })
                 .catch((err) => {
                  res.status(500).json(`Error: ${err}`)
                  console.log(err);
                     })
                }
            })
        }
    }) 
}


exports.login_user = (req, res) => {
    User.find({username : req.body.username})
    .exec()
    .then((user) => {
        if(user.length < 1){
            res.status(401).json({
                message : "Auth failed"
            })
        }

        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if(err){
                return res.status(401).json({
                    message : "Auth failed"
                })
            }
            if(result){
               const token =  jwt.sign({
                   _id : user[0]._id,
                    username : user[0].username
                }, process.env.JWT_KEY,
                    {
                        expiresIn : '2h'
                    }
                )
                return res.status(200).json({
                    message : "Authorization Successful",
                    token : token
                })
            }
            return res.status(401).json({
                message : "Auth failed"
            })
        })
    })
}

exports.delete_user =  (req, res) => {
    User.deleteOne({_id : req.params.userId})
    .exec()
    .then(() => 
        res.status(200).json({
        message : 'User deleted',
        
    }))
    .catch(err => res.status(400).json({
        message : 'Deletion not successful',
        Error : err
    }))
}