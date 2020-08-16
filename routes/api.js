const express = require("express");
const router = express.Router();
const controllerApiUser = require("../controllerApi/user");
const controllerApiProduct = require("../controllerApi/product");

module.exports = router;

// User
router.post("/user/login", controllerApiUser.checkLogin);
router.post("/user/register", controllerApiUser.checkRegister);


// Product

router.post("/product/add", controllerApiProduct.addProduct);
router.post("/product/upload", controllerApiProduct.uploadImage);
router.get("/product/all", controllerApiProduct.getAllProduct);
router.post("/product/delete/:id", controllerApiProduct.deleteProduct);
router.post("/product/edit/:id", controllerApiProduct.editProduct);
// new code
router.get("/product/find", controllerApiProduct.getProductsByName);