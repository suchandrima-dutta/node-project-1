const express =require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const { MongoClient } = require("mongodb");
const ProductModel = require("./model/product");
dotenv.config();

//connect to db
//const client = new MongoClient(process.env.DB_CONNECT);
 const connectDb = async() => {
     await mongoose.connect(process.env.DB_CONNECT,
        ()=>console.log("connected to db")
        );
};

const run = async() => {
    await connectDb();
    console.log("After connection");
}

run();


//import routes
const productRoutes=require("./routes/Product");

//route Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use("/api/products",productRoutes);
//create
app.post("/create",(req,res)=>{
    console.log(req.body);
});

app.listen(4000,()=>console.log("server up and running on port 4000!"));
