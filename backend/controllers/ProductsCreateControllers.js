const Product = require("../model/productSchema");

const ProductsCreate = (req, res) => {
  try {
    let { name, title, description, image, price } = req.body;

    let product = new Product({
      name: name,
      title: title,
      description: description,
      image: image,
      price: price,
    });
    product.save();

    res.send({ success: "Product Cteate Successfull" });
    console.log(product);
  } catch (error) {
    console.log(error);
  }
};
module.exports = ProductsCreate;
