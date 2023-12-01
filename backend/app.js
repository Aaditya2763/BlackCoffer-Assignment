
const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const app=express();
const cors=require('cors')
const connectDB=require('./database/connectdb');
const seeddb=require('./seed');
app.use(express.urlencoded({extended:true}));
const bodyParser = require("body-parser");
app.use(express.json());



connectDB();
seeddb();

const corsOptions = {
     origin: ["https://live-demo-woad.vercel.app","http://localhost:3000"], // Some legacy browsers (IE11) may not handle 200
};

app.use(cors(corsOptions));
app.use(express.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies
const productRoutes=require('./routes/productsRoutes')
const userRoutes=require('./routes/userRoutes')
const port=5000;
app.get('/',(req,res)=>{
res.send(`Server is running at port ${port}`)
});
app.use('/products',productRoutes)
app.use('/user',userRoutes)

app.listen(port,(req,res)=>{
    console.log(`Server is running at port ${port}`);
})

