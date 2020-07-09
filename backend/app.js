const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('morgan');
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/users');
const exerciseRouter = require('./routes/exercises')
const myUri = 'mongodb://localhost:27017/Trackfit'
const MONGO_URI = require('./config/keys')
const connection = mongoose.connection;
mongoose.connect(MONGO_URI, {useNewUrlParser : true, useCreateIndex : true, useUnifiedTopology: true});
connection.once('open', () => {
    console.log('Database connected successfully');
})

require('dotenv').config();

const app = express();


app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
    }));
app.use(express.json());
app.use(logger('dev'));
app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);



//Handling Errors
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status(404);
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error : {
            message : error.message
        }
    })
})





module.exports = app;