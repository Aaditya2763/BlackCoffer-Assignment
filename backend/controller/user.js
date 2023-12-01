const User=require('../model/userModel')

const expressAsyncHandler=require('express-async-handler')
//creating user
const registerUser=async(req, res)=>{
 try{
    const userExist = await User.findOne({
        email: req?.body?.email
    });
   
    if (userExist) {
      res.json("user already exists with this email")

    }
    else{
 
        const user = await User.create({
            username: req?.body?.username,
            email: req?.body?.email,
            password: req?.body?.password,
            gender: req?.body?.gender,
        });
        res.status(200).json(user);
  
    }
 }
  
 catch(e){
    res.json(e.message);
 }
   
  
    
    

}



//user login 
const userLogin=expressAsyncHandler(
    async(req,res)=>
    {try{
        
        const { email, password } = req.body;
    console.log(email, password);

  const user=await User.findOne({
  email
  })

  
  
  if(!user) {
    res.status(401).json("Invalid email");
  
  }
  if(user &&  (user.password==password)) {
    // throw new Error("Invalid credentilas");
    res.json(user);
  }
      else{
        res.status(401).json("Invalid password")
      }
  
    }
    catch(e){
        res.status(e.status).json(e.message);
    }
      
  }
  )
  
  


module.exports={
    registerUser,
    userLogin,
}