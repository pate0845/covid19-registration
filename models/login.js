const mongoose=require('mongoose')

const LoginSchema=new mongoose.Schema({
    user:{
        type:String,
        required:[true,'must provide user name'],
        trim:true,
        maxlength:[25,'User name cannot be more than 25 character']
    },
    password:{
        type:String,
        required:[true,'must provide user name']
    }
},{
    writeConcern: {
        j: true,
        wtimeout: 1000
      }
})

module.exports=mongoose.model('Login',LoginSchema)