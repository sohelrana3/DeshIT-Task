const express = require("express");
const _ = express.Router();
const ProductCreate = require("../controllers/ProductsCreateControllers");

_.post("/Product", ProductCreate);

module.exports = _;
