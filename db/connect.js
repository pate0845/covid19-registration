const mongoose = require("mongoose")
require('dotenv').config({path:"./.env"});

const connectDB=()=>{
    return mongoose.connect('mongodb://local:Omnamah3062001@cluster0-shard-00-00.ssloo.mongodb.net:27017,cluster0-shard-00-01.ssloo.mongodb.net:27017,cluster0-shard-00-02.ssloo.mongodb.net:27017/covid19-screening?ssl=true&replicaSet=atlas-gsj7rl-shard-0&authSource=admin&retryWrites=true&w=majority',
        (err)=>{
            if(err)console.log(err);
            else console.log('Connected to DB');
        })
    .catch((e)=>{console.log(e)});
}

module.exports=connectDB;