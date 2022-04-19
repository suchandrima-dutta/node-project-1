const { findByIdAndUpdate } = require("../model/product");
const Product=require("../model/product");
//Get All products
const Product_all=async (req,res)=>{
    console.log("The request");
    try{
        const products = await Product.find({});
        console.log(" Products are",products)
        res.json(products);
    }
    catch(error){
        res.json({message: error});
    }
    };
//Single product
const Product_details=async (req,res)=>{
    console.log("The request");
    try{
        const products = await Product.findOne({_id:req.params.productId});
        console.log(" Products are",products)
        res.json(products);
    }
    catch(error){
        res.json({message: error});
    }
};
//Add New product
const Product_create=async  (req,res)=>{
    console.log("The request",req.body);
    
    try{
        const savedProduct=await Product.create(req.body);

        res.send(savedProduct);
    }
    catch (error){
        res.status(400).send(error);
    }
    
   

};
//Update product
const Product_update=async (req,res)=>{
    console.log("The request",req.params.productId,req.body);
    try{
        const products = await Product.findOneAndUpdate({_id:req.params.productId},{$set:req.body});
        console.log(" Products are",products)
        res.json(products);
    }
    catch(error){
        res.json({message: error});
    }


};
//Delete product
const Product_delete=async (req,res)=>{
    console.log("The request");
    try{
        const products = await Product.deleteOne({_id:req.params.productId});
        console.log(" Products are",products)
        res.json(products);
    }
    catch(error){
        res.json({message: error});
    }
};

module.exports={
    Product_all,
    Product_details,
    Product_create,
    Product_update,
    Product_delete
}