import { Router } from "express";

import ProductManager from "../productManager.js";
const pmanager =new ProductManager()
const router = Router();

router.get("/", async(req, res) => {
  const products= await pmanager.getProducts()
  if(products.length !=0)
  {
    res.json({products})
  }
  else{
    res.send ("No hay productos en la base de datos")
  }
});

router.get("/:id",async (req, res) => {
  const id= req.params.id;
  const producto=await pmanager.getProductbyId(id)
  if(producto)
  {
    res.json({producto})
  }
  else{
    res.send ("No hay productoa en la base de datos")
  }
});

router.post("/", async(req, res) => {
  const objProduct = req.body;
  const productoAdded=await pmanager.createProduct(objProduct)
  console.log(productoAdded)
  res.json({message: "Producto creado con exito",product:productoAdded})
});
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const objProduct = req.body;
});

router.delete("/:id", async(req, res) => {
  const id = req.params.id;
  const deleproduct=await pmanager.deletebyId(id)
  res.json({message:"Producto eliminado con exito",product:deleproduct})
});

export default router;
