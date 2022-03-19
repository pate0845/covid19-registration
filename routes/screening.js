const express=require('express');
const router=express.Router();
const {postData,getData,getAllData,deleteData,updateData}=require('../controllers/screening')


router.route('/').post(postData).get(getAllData);
router.route('/:id').get(getData).patch(updateData).delete(deleteData);
module.exports=router;