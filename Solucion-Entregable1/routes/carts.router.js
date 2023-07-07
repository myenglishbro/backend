import {Router} from "express"
import { __dirname } from "../utils.js"

import CartManager from "../managers/cartManager.js"
const manager =new CartManager(__dirname+"/files/carts.json")
const router=Router()

router.get("/carts",async(req,res)=>{
    const listOfCarts= await manager.getCarts()
    res.json({message:"success",listOfCarts})
 
})

router.get("/carts/:cid",async(req,res)=>{
    const cartfound=await manager.getCartbyId(req.params)
    res.send({status:"success",cartfound})
})

router.post("/carts",async(req,res)=>{
    const newcart=await manager.addCart(req.body)
    res.send({status:"success",newcart})
})

router.post("/carts/:cid/products/:pid",async(req,res)=>{
    const cid=parseInt(req.params.cid)
    const pid=parseInt(req.params.pid)
    const addproductsToCart=await manager.addProductToCart(cid,pid)
    res.send({status:"success",addproductsToCart})
})



export default router