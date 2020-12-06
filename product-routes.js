const express = require("express");
// import handlers from a controller class
const productController = require("./product.controller");
const router = express.Router();

// register routes mapping to controller methods
// see: productController.list() is actually executing the method, productController.list is a reference to the method
router.get("/", productController.list);
router.get("/:id", productController.get);
router.post("/", productController.create);
router.put("/:id", productController.update);
router.delete("/:id", productController.delete);

module.exports = router;
