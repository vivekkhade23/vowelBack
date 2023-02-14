const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    qty: { type: String, required: true }
})

const orderModal = mongoose.model("order", orderSchema);

module.exports = orderModal;