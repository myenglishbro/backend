import {Router} from "express"
import CartManager from "../managers/cartManager.js"
import { __dirname } from "../utils.js"
const manager=new CartManager(__dirname+'/files/carts.json')
const router =Router()

router.get("/carts",async(req,res)=>{
   const carrito=await manager.getCarts()
   res.json({carrito})
})

router.get("/carts/:cid",async(req,res)=>{
    const carritofound=await manager.getCartbyId(req.params)
    res.json({status:"success",carritofound})
})


router.post("/carts/", async (req, res) => {
    const newcart = await manager.addCart();
     res.json({ status: "success", newcart });
  });

  router.post("/carts/:cid/products/:pid", async (req, res) => {
    try {
      const cid = parseInt(req.params.cid);
      const pid = parseInt(req.params.pid);
  
      await manager.addProductToCart(cid, pid);
      res.json({ status: "success", message: "Product added to cart successfully." });
    } catch (error) {
      console.error("Error adding product to cart:", error);
      res.status(500).json({ status: "error", message: "Failed to add product to cart." });
    }
  });
  

export default router