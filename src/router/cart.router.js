const express = require("express")
const cartRouter = express.Router();
const Cart=require("../model/cart.model")

cartRouter.post("/",async(req,res)=>{
    try {
        const {title,price,image,qty}=req.body;
        let pro=new Cart({title:title,price:price,image:image,qty:qty});
        pro=await pro.save();
        return res.status(200).send("Added to Cart")
    } catch (error) {
        return res.send(error)
    }
})
cartRouter.get("/",async(req,res)=>{
    try {
        let cart=await Cart.find({})
        return res.status(200).send(cart)
    } catch (error) {
        return res.send(error)
    }
})

cartRouter.put("/:id",async(req,res)=>{
    try {
     const {id}=req.params;
    const {qty}=req.body;
     let item= Cart.findByIdAndUpdate(id,{qty:qty},function(err,data){
         if(err){
             console.log("there is an error")
         }else{
             console.log("it worked")
         }
     })
     console.log(item)
     return res.send("cart item updated successfully")
    } catch (e) {
     res.send(e)
    }
 })

 cartRouter.delete("/",async(req,res)=>{
    try{  
     await Cart.deleteMany({})

   return   res.status(200).send({message:"Item Deleted"})
  }
  catch(err){
    return  res.send("errrrr",err)
  }
  })


module.exports=cartRouter