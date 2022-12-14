const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routers/users")
const authRoute = require("./routers/auth")

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true},()=>{
    console.log("Connected to mongoDB");
});

// MIDDLEWARES
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/users',userRoute)
app.use('/api/auth',authRoute)

app.listen(8800,()=>{
    console.log("Backened server is running!!");
})