const express=require("express")
const orderRouter=express.Router();
const Order=require("../model/order.model")


orderRouter.get("/",async(req,res)=>{
    try {
        let pro=await Order.find({})
return res.status(200).send(pro)
    } catch (error) {
        return res.send(error)
    }
})

orderRouter.post("/",async(req,res)=>{
    try {
const {title,price,image,qty}=req.body;
        let pro=new Order({title:title,price:price,image:image,qty:qty});
        pro=await pro.save()
return res.status(200).send("order placed")


    } catch (error) {
        return res.send(error)
    }
})

orderRouter.delete("/",async(req,res)=>{
    try{  
     await Order.deleteMany({})

   return   res.status(200).send({message:"Item Deleted"})
  }
  catch(err){
    return  res.send("errrrr",err)
  }
  })

module.exports=orderRouter;