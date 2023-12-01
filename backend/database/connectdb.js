

const { default: mongoose } = require("mongoose");

const DB_URL="mongodb+srv://singhaditya2763:Aditya1040@cluster0.ctrx76p.mongodb.net/?retryWrites=true&w=majority";
const connectDB=async()=>{
    
    await mongoose.connect( DB_URL ,{
        useNewUrlParser: true, 
        useUnifiedTopology: true ,
       
    })
    .then(()=>console.log("DB connected"))
    .catch((e)=>console.log(e))
  

}
module.exports=connectDB;