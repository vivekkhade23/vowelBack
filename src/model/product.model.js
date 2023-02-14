const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String , required: true }

})

const productModal = mongoose.model("product", productSchema);

module.exports = productModal;