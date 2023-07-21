import { Router } from "express";
import { __dirname } from "../utils.js";
import ProductManager from "../dao/mongomanagers/productManagerMongo.js";
const pmanager =new ProductManager()
// import ProductManager from "../dao/filemanagers/controllers/productManager.js";
// const pmanager=new ProductManager(__dirname+"/dao/filemanagers/db/products.json")

const router =Router()


// router.get("/",async(req,res)=>{
//     const listadeproductos=await pmanager.getProducts({})
//     console.log(listadeproductos)
//     res.render("home",{listadeproductos})
// })

router.get("/",async(req,res)=>{
        const listadeproductos=await pmanager.getProducts()
        console.log(listadeproductos)
        res.render("home",{listadeproductos})
    })

router.get("/realtimeproducts",(req,res)=>{
    res.render("realtimeproducts")
})

router.get("/chat",(req,res)=>{
    res.render("chat")
})


export default router