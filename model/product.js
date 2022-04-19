const mongoose=require("mongoose");

const productSchema= new mongoose.Schema({
    title: {type:String, required:true},
    price: {type:String, required:true},
    image: {type:String, required:true},
    details: {type:String, required:true},

});
const ProductModel = mongoose.model("products",productSchema);

module.exports = ProductModel;