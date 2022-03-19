const express=require('express')
const router=express.Router();
const {loginAuth,addUser}=require('../controllers/login')

router.route('/').post(addUser)
router.route('/login').post(loginAuth)



module.exports=router;