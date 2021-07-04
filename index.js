import express from 'express'
import mongoose from 'mongoose';
import { userRouter } from './Routers/UserRouter.js';
//const express = require('express');
//const {User} = require('./modals/users')
const app = express();
const PORT = process.env.PORT || 5001;

//const mongoose = require('mongoose');
//const url = 'mongodb://localhost/test';
const url = process.env.MONGODB_URI || 'mongodb://localhost/test' ;
//const url = 'mongodb+srv://preethist:guvi123@cluster0.1nusq.mongodb.net/testData'

/* {useNewUrlParser:"true"} => Given so that we no need to mention port - 27017 */
mongoose.connect(url,{useNewUrlParser:"true",useUnifiedTopology: true});
const con = mongoose.connection;

con.on('open',()=> console.log("MongoDB connected"));

/* Middleware */
app.use(express.json());

app.get('/',(req,res) => {
    res.send("Data received")
})

app.use('/users',userRouter);


app.listen(PORT,()=> console.log("app started - Using"));

//use - npm run dev - for development
