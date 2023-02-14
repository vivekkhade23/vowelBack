const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    qty: { type: Number, required: true }
})

const cartModal = mongoose.model("cart", cartSchema);

module.exports = cartModal;