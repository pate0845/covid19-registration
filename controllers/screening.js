const Screening=require('../models/schema');


//get all the data
const getAllData=async (req,res)=>{
    try{
        const d=await Screening.find({});
        if(d.length==0)return res.status(201).json({msg:'No data'})
        res.status(201).json({Data:d})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

//converts yes or no to boolean
const convertToBoolean=(obj)=>{
    let newObj=obj;
    let key=Object.keys(newObj);
    for(let i=0;i<key.length;i++){
        if(newObj[key[i]]==='yes'){
            newObj[key[i]]=true;
        }
        if(newObj[key[i]]==='no'){
            newObj[key[i]]=false;
        }
    }
    return newObj;
}

//post the form data
const postData=async (req,res)=>{
    try{
       const f= convertToBoolean(req.body);
       const {
        fName,lName,Email,PhoneNumber,EmployeeId,VaccineStatus,Symptoms,TravelStatus,Carrier
        ,Information,Date
    }=f;
    if(fName,lName,Email,PhoneNumber,EmployeeId,VaccineStatus,Symptoms,TravelStatus,Carrier
        ,Information,Date===''){
        return res.status(201).json({msg:`Please enter all values`})
    }
       await Screening.create( {
        fName,lName,Email,PhoneNumber,EmployeeId,VaccineStatus,Symptoms,TravelStatus,Carrier
        ,Information,Date
    });
     res.status(201).json({created:true})
    }catch(error){
        res.status(500).json({msg:error._message})
    }
}

//get data with id
const getData=async (req,res)=>{
    try{
        const {id}=req.params;
        const data=await Screening.findOne({_id:id})
        if(!data){
            return res.status(404).json({msg:`No data present with id:${id}`})
        }
        res.status(200).json({data})
    }catch(error){
        res.status(500).json({msg:error})
    }    
}

//update data
const updateData=async (req,res)=>{
    try{
        const {id}=req.params;
        const data=await Screening.findByIdAndUpdate({_id:id},convertToBoolean(req.body),{
            new:true,
            runValidators:true
        })
        if(!data){
            return res.status(404).json({msg:`no task with id:${taskID}`})
        }
        res.status(200).json({data})
    }catch(error){
        res.status(500).json({msg:error})
    }
}

//delete data of a given id
const deleteData=async (req,res)=>{
    try{
        const{id}=req.params;
        const data=await Screening.deleteOne({_id:id});
        if(!data){
            return res.status(200).json({msg:`No data present with id:${id}`})
        }
        res.status(200).json({data})
    }catch(error){
        res.status(500).json({msg:error});
    }
}


module.exports={
    postData,
    getData,
    getAllData,
    updateData,
    deleteData}

