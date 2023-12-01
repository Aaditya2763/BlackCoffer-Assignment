
const ProductsData=require('../model/datamodel');


const getAllData=async(req,res)=>{
    try{
     const data=await ProductsData.find({});
        res.status(200).json(data);
    }
    catch(e){
        
res.status(400).json("unable to get all products");
    }
   
}

module.exports ={
    getAllData,
}