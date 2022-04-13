const router= require("express").Router();
const {Product_all} = require('../controllers/productController');

router.get("/",(req, res, next) => {
    console.log("In the middleware");
    next();
},Product_all);
router.post("/");
router.get("/:productId");
router.put("/productId");
router.delete("/productId");


module.exports=router;