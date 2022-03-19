const mongoose = require("mongoose")

const ScreeningSchema=new mongoose.Schema({
    fName:{
        //validation
        type:String,
        required:[true,'Must provide first name'],
        trim:true,
        maxlength:[20,'first name cannot be more than 20 character']
    },
    lName:{
        type:String,
        required:[true,'Must provide last name'],
        trim:true,
        maxlength:[20,'last name cannot be more than 20 character']
    },
    Email:{
        type:String,
        required:[true,'Must provide email'],
        trim:true,
        maxlength:[40,'email cannot be more than 40 character']
    },
    PhoneNumber:{
        type:Number,
        required:[true,'Must provide number'],
        trim:true,
        maxlength:[10,'number cannot be more than 10 character']
    },
    EmployeeId:{
        type:String,
        required:[true,'Must provide employee id'],
        trim:true,
        maxlength:[8,'name cannot be more than 8 character']
    }, 
    VaccineStatus:{
        type:Boolean,
        required:[true,'Must provide vaccine status'],
    },
    Symptoms:{
        type:Boolean,
        required:[true,'Must provide if you have symptoms or not'],
    },
    TravelStatus:{
        type:Boolean,
        required:[true,'Must provide if you have outside the country or not'],
    }, 
    Carrier:{
        type:Boolean,
        required:[true,'Must provide if you are in contact with a covid19 infected person'],
    }, 
    Information:{
        type:Boolean,
        required:[true,'Must provide if the information provided is true or not'],
    },
    Date:{
        type:String,
        required:[true,'Must provide the date'],
    }
},{
    writeConcern: {
        j: true,
        wtimeout: 1000
      }
})

module.exports=mongoose.model('Screening',ScreeningSchema);
