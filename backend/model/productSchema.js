const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: String,
    },
    // variant: [variantSchema],
});

module.exports = mongoose.model("Product", productSchema);