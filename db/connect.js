const mongoose = require("mongoose")

require('dotenv').config({path:"./.env"});

const connectDB=()=>{
    return mongoose.connect('mongodb+srv://local:Omnamah3062001@cluster0.ssloo.mongodb.net/covid19-screening?retryWrites=true&w=majority',
        (err)=>{
            if(err)console.log(err);
            else console.log('Connected to DB');
        })
    .catch((e)=>{console.log(e)});
}

module.exports=connectDB;