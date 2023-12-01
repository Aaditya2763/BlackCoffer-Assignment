const mongoose=require('mongoose')


const userSchema=new mongoose.Schema(
    {
        username:{
            //if we want to provide requitred message we put it in array having bollean value(true/false) and a message
            required:[true,'Username is required'],
            type:String,
        },
        password:{
            required:[true,'Password is required'],
            type:String,
        },
        email:{
            required:[true,'Email is required'],
            type:String,
        },
       gender:{
           
                required:[true,'Gender is required'],
                type:String,
          
        }
    }
)

const User=mongoose.model('User',userSchema);
module.exports=User;






