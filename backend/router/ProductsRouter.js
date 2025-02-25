const express = require("express");
const _ = express.Router();
const ProductCreate = require("../controllers/ProductsCreateControllers");
const allProduct = require("../controllers/allProductsControllers")

_.get("/allproduct", allProduct)
_.post("/Product", ProductCreate);


module.exports = _;
