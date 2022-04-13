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
const Product_details=async (req,res)=>{};
//Add New product
const Product_create=async  (req,res)=>{};
//Update product
const Product_update=async (req,res)=>{};
//Delete product
const Product_delete=async (req,res)=>{};

module.exports={
    Product_all,
    Product_details,
    Product_create,
    Product_update,
    Product_delete
}