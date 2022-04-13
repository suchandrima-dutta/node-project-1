const mongoose=require("mongoose");

const productSchema= new mongoose.Schema({
    title: String,
    price: String,
    image: String,
    details: String

});
const ProductModel = mongoose.model("products",productSchema);

module.exports = ProductModel;