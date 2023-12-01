
const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const app=express();
const cors=require('cors')
const connectDB=require('./database/connectdb');
const seeddb=require('./seed');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your allowed origin(s)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // credentials: true, // Set to true if you're dealing with cookies or sessions
    optionsSuccessStatus: 204, // Some legacy browsers (IE11) may not handle 200
  };
  
  app.use(cors(corsOptions));
  


connectDB();
seeddb();
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

