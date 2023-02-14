const express = require("express")
const orderRouter = express.Router();
const Order = require("../model/order.model")


orderRouter.get("/", async (req, res) => {
    try {
        let pro = await Order.find({})
        return res.status(200).send(pro)
    } catch (error) {
        return res.send(error)
    }
})

orderRouter.post("/", async (req, res) => {
    try {
        const { title, price, image } = req.body;
        let pro = new Order({ title: title, price: price, image: image });
        pro = await pro.save()
        return res.status(200).send("order placed")


    } catch (error) {
        return res.send(error)
    }
})


module.exports = orderRouter;