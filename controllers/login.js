const Login=require('../models/login');
const bcrypt=require('bcrypt');



const addUser=async (req,res)=>{
    try{
        const {user,password}=req.body
        if(user==''||password==''){
            return res.status(201).json({msg:'Please enter user and password'})
        }
        const hashedPassword=await bcrypt.hash(password,10);
        await Login.create({user,password:hashedPassword});
    res.status(200).json({Name:user,created:true});
    }catch(error){
        console.log(error)
        res.status(500).json({msg:error})
    }
}

const loginAuth=async (req,res)=>{
    try{
        const {user:username,password}=req.body;
        if(username==''||password==''){
            return res.status(200).json({msg:'Please enter user and password'})
        }
        const data=await Login.findOne({user:username});

        if(!data){
            return res.status(200).json({msg:`No user with name ${username}`})
        }

        if(await bcrypt.compare(password,data.password)){
            res.json({login:true,msg:'Correct password'})
        }else{
            res.json({login:false,msg:'Incorrect password'})
        }
    }catch(error){
        res.status(500).json({msg:error.body})
    }
}


module.exports={loginAuth,addUser}