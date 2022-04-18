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
    console.log("The request");
    
    try{
const products = await Product.create({"details":"JUST Blue, 6GB RAM, 128GB STORAGE","image":"https://vlebazaar.in/image/cache/catalog//B08CFSZLQ4/Google-Pixel-4a-j...","price":"RS. 25,000","title":"GOOGLE PIXEL 4A (JUST BLACK, 6GB RAM, 128GB STORAGE)"});
        console.log(" Products are",products)
        res.json(products);
    }
    catch(error){
        res.json({message: error});
    }

};
//Update product
const Product_update=async (req,res)=>{};
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