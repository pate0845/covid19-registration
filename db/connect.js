const mongoose = require("mongoose")
require('dotenv').config();

const connectDB=()=>{
    return mongoose.connect(process.env.MONGO_URI)
    .then(()=>{console.log('Connected to database')})
    .catch((e)=>{console.log(e)});
}

module.exports=connectDB;