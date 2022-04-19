const router= require("express").Router();
const {Product_all, Product_details,Product_create,Product_delete, Product_update} = require('../controllers/productController');

router.get("/",(req, res, next) => {
    console.log("In the middleware");
    next();
},Product_all);
router.post("/create",Product_create);
router.put("/:productId",Product_update);
router.delete("/:productId",Product_delete);


router.get("/:productId",Product_details);

module.exports=router;