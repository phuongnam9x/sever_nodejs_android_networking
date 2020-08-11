const express = require("express");
const router = express.Router();
const controllerApiUser = require("../controllerApi/user");
const controllerApiProduct = require("../controllerApi/product");

module.exports = router;

// User
router.post("/user/login", controllerApiUser.checkLogin);
router.post("/user/register", controllerApiUser.checkRegister);
// router.get("/user/all", controllerApiUser.getAllUser);
// router.put("/user/logout", controllerApiUser.logout);
// router.get("/user/verify", controllerApiUser.verifyEmail);
// router.post("/user/forget", controllerApiUser.forgotPassword);
// router.post("/user/reset/:code", controllerApiUser.resetPassword);
// router.post("/user/delete/:id", controllerApiUser.deleteUser);

// Product

router.post("/product/add", controllerApiProduct.addProduct);
router.post("/product/upload", controllerApiProduct.uploadImage);
router.get("/product/all", controllerApiProduct.getAllProduct);
router.post("/product/delete/:id", controllerApiProduct.deleteProduct);
router.post("/product/edit/:id", controllerApiProduct.editProduct);