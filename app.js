const express = require('express');
const mongoose = require('mongoose');
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const expressValidator = require("express-validator")

const app = express();
require('dotenv').config();

//routes import
const userRouter = require("./routes/user")

mongoose.connect(process.env.DATABASE,{
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useCreateIndex : true
}).then(()=>{
    console.log("Db connected")
})

//middlewares

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())


//routes middleware
app.use(userRouter)


const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log("App is running")
}) 