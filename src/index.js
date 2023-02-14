const express = require('express')

const dotenv = require('dotenv')
let bodyParser = require('body-parser')
const cors=require('cors')
const productRouter = require('./router/product.router')
const Dbconnect = require('./config/Dbconnect')
const orderRouter = require('./router/order.router')
const cartRouter = require('./router/cart.router')

let PORT =process.env.PORT || 8080
dotenv.config()
const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(express.json())

app.get('/' , (req , res) => { return  res.send('Namshkar') })
app.use("/product",productRouter)
app.use("/order",orderRouter)
app.use("/cart",cartRouter)

app.listen(PORT,  () => { 
    Dbconnect()
    console.log(`Live on http://localhost:PORT`) })