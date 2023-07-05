import express from "express"
import ProductManager from "./productManager.js";
const manager=new ProductManager("../files/products.json")
const app=express()
const PORT=8080;

app.get("/products",async(req,res)=>{
    const {limit}=req.query
    const products= await manager.getProducts()
    if(limit){
     const limitproducts=products.slice(0,limit)
     res.json({status:"Success",limitproducts})

    }
    else{
        res.json({status:"Success",products})
    }
})

app.get("/products/:pid",async(req,res)=>{
    // const pid=parseInt(req.params.pid)
    const {pid}=req.params

    const products= await manager.getProducts()
    const productfind=products.find(elemento=>elemento.id===parseInt(pid))
    console.log(productfind)
    res.send({status:"success",productfind})
})


app.listen(PORT,()=>{
    console.log("server is working")
})