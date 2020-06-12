const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('morgan');
const userRouter = require('./routes/users');
const exerciseRouter = require('./routes/exercises')
const myUri = 'mongodb://localhost:27017/Trackfit'
const uri = 'mongodb+srv://charlesnnanna:metaphor@cluster0-7omdq.gcp.mongodb.net/Trackfit?retryWrites=true&w=majority';
const connection = mongoose.connection;
mongoose.connect(myUri, {useNewUrlParser : true, useCreateIndex : true, useUnifiedTopology: true});
connection.once('open', () => {
    console.log('Database connected successfully');
})

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
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

app.listen(port, () => {
    console.log(`Server Running at port: ${port}`);
})