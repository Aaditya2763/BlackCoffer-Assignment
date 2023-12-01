const express=require('express');
const router=express.Router();

const { getAllData } = require('../controller/products');

router.route("/productsdata")
.get(getAllData)


module.exports=router;