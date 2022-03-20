const mongoose = require("mongoose")
require('dotenv').config({path:"./.env"});

const connectDB=()=>{
    return mongoose.connect(process.env.MONGO_URI,
        (err)=>{
            if(err)console.log(err);
        })
    .then(()=>{console.log('Connected to database')})
    .catch((e)=>{console.log(e)});
}

module.exports=connectDB;