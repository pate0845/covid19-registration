const mongoose = require("mongoose")

require('dotenv').config();

const connectDB=()=>{
    return mongoose.connect(process.env.MONGO_URI,
        (err)=>{
            if(err)console.log(err);
            else console.log('Connected to DB');
        })
    .catch((e)=>{console.log(e)});
}

module.exports=connectDB;