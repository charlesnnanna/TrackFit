const Exercise = require('../models/exercise.model');
const User = require('../models/user.model')
const mongoose = require('mongoose');

exports.get_all_exercise = (req, res) => {
    Exercise.find()
    .populate('user')
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json({ Error : err}))
}

exports.get_single_exercise = (req, res) => {
    const id = req.params.exerciseId;
    Exercise.findById(id)
    .then(exercise => {
        if(exercise === null){
            return res.status(400).json({
                message : "Exercise doesn't exist or may have been deleted"
            })
        }
        res.status(200).json({
            ThisExercise : exercise
        })
    })
    .catch(err => {
        res.status(404).json({
            message : 'Exercise Not Found'
        })
    })
}

exports.add_new_exercise = (req, res) => {
    User.findById(req.body.user)
    .then(user => {
        console.log(user)
        if(!user){
           return res.status(404).json({
                message : 'User not found'
            })
        }
        const newExercise = new Exercise({
            _id : new mongoose.Types.ObjectId(),
            user : req.body.user,
            description : req.body.description,
            duration : Number(req.body.duration),
            date : Date.parse(req.body.date)
        })

      newExercise.save()
      .then((result) => res.json({
        message : 'Exercise added',
        Exercise : result
    }))
        .catch((err) => {
        res.status(400).json(`Error : ${err}`)
        console.log(err);
    })
    })
    .catch(err => {
        res.status(400).json({
            message : "Not Found in Database",
            Error : err
        })
    })
}

exports.update_existing_exercise = (req, res) => {
    const id = req.params.exerciseId
    const updateOps = {}
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value
    }

    Exercise.update({_id : id}, {$set : updateOps})
    .exec()
    .then(result => res.status(201).json({
        message : 'Update Successful',
        Updated : result
    }))
    .catch(err => res.status(400).json({
        message : 'Update not successful',
        Error : err
    }))
}

exports.delete_exercise = (req, res) => {
    Exercise.deleteOne({_id : req.params.exerciseId})
    .exec()
    .then(() => res.status(200).json({
        message : 'Exercise deleted'
    }))
    .catch(err => res.status(400).json({
        message : 'Deletion not successful',
        Error : err
    }))
}