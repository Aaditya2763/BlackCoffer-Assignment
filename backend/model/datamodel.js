
const mongoose=require('mongoose');


const dataSchema=new mongoose.Schema(
    {
        start_year:{
            type:Date,
        },
        end_year:{
            type:Date,
        },
        added:{
            type:Date
        },
        published:{
            type:Date,
        },
        sector:{
            type:String
        },
        intensity:{
            type:Number
        },
        impact:{
           type:String,
        },
        insight:{
            type:String
        },
        region:{
            type:String
        },
        url:{
            type:String
        },
        topic:{
            type:String
        },
        country:{
            type:String
        },
        pestle:{
            type:String
        },
        source:{
            type:String
        },
       title:{
            type:String
        },
        relevance:{
           type: Number
        },
       likelihood:{
            type: Number
         },



    }
)

const data=mongoose.model('dbproducts',dataSchema);

module.exports=data;