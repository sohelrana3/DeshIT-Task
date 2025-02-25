const Product = require("../model/productSchema");

const allProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products)
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = allProduct;
