const express=require("express");
const productRouter=express.Router()
const Product=require("../model/product.model")

productRouter.get("/",async(req,res)=>{
    try {
        let pro=await Product.find({});
        return res.send(pro)
        
    } catch (error) {
        return res.send(error)
    }
})

productRouter.post("/",async(req,res)=>{
  try{  
    const {title,price,image}=req.body;
let pro=new Product({title:title,price:price,image:image,qty:1})
pro =await pro.save();
 return   res.status(200).send({message:"New Item Created"})
}
catch(err){
  return  res.send("errrrr",err)
}
})

productRouter.put("/:id",async(req,res)=>{
    try {
     const {id}=req.params;
    const {title,price}=req.body;
     let item= Product.findByIdAndUpdate(id,{title:title,price:price},function(err,data){
         if(err){
             console.log("there is an error")
         }else{
             console.log("it worked")
         }
     })
     console.log(item)
     return res.send("item updated successfully")
    } catch (e) {
     res.send(e)
    }
 })

productRouter.delete("/:id",async(req,res)=>{
    try{  
      const {id}=req.params;
  Product.findByIdAndDelete(id,function(err,data){
    if(err){
        console.log("there is an error")
    }else{
        console.log("it worked")
    }
})
   return   res.status(200).send({message:"Item Deleted"})
  }
  catch(err){
    return  res.send("errrrr",err)
  }
  })

module.exports=productRouter