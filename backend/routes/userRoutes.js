 
const express=require('express');
const router=express.Router();

const {registerUser,
       userLogin}=require('../controller/user');


//user routes creating user
router.route('/signup')
.post(registerUser);

//user route user login api
router.route('/login')
.post(userLogin);



module.exports=router;