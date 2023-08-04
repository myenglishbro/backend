import { Router } from 'express';
const routerC = Router()
import CartManager from "../dao/managers/cartManagerMongo.js"
import ProductManager from "../dao/managers/productManagerMongo.js"


const cm = new CartManager()
const pm = new ProductManager()

// ENDPOINT Auxiliar para corroborar todos los carritos 
routerC.get("/",async(req,res)=>{
    const carrito=await cm.getCarts()
    res.json({carrito})
 })
 // ENDPOINT Que devuelve un carrito
 routerC.get("/:cid",async(req,res)=>{
   const{cid}=req.params
     const carritofound=await cm.getCartById(cid)
     res.json({status:"success",carritofound})
 })
 
 
 // ENDPOINT para crear un carrito con o sin productos

 routerC.post('/', async (req, res) => {
   try {
       const { obj } = req.body;
 
       if (!Array.isArray(obj)) {
           return res.status(400).send('Invalid request: products must be an array');
       }
 
       const validProducts = [];
 
       for (const product of obj) {
           const checkId = await pm.getProductById(product._id);
           if (checkId === null) {
               return res.status(404).send(`Product with id ${product._id} not found`);
           }
           validProducts.push(checkId);
       }
 
       const cart = await cm.addCart(validProducts);
       res.status(200).send(cart);
 
   } catch (err) {
       console.log(err);
       res.status(500).send('Internal Server Error');
   }
 });
 
 
 
 
  // ENDPOINT para colocar la cantidad de un producto

 
 routerC.post("/:cid/products/:pid", async (req, res) => {
     const { cid, pid } = req.params;
     const { quantity } = req.body;
   
     try {
       const checkIdProduct = await pm.getProductById(pid);
       if (!checkIdProduct) {
         return res.status(404).send({ message: `Product with ID: ${pid} not found` });
       }
   
       const checkIdCart = await cm.getCartById(cid);
       if (!checkIdCart) {
         return res.status(404).send({ message: `Cart with ID: ${cid} not found` });
       }
   
       const result = await cm.addProductInCart(cid, { _id: pid, quantity:quantity });
       console.log(result);
       return res.status(200).send({
         message: `Product with ID: ${pid} added to cart with ID: ${cid}`,
         cart: result,
       });
     } catch (error) {
       console.error("Error occurred:", error);
       return res.status(500).send({ message: "An error occurred while processing the request" });
     }
   });


   // ENDPOINT que actualiza la lista de productos en el carrito
routerC.put('/:cid', async (req, res) => {
  try {
      const { cid } = req.params;
      const { products } = req.body;

      // Verificar si todos los productos existen antes de actualizar el carrito
      for (const product of products) {
          const checkId = await pm.getProductById(product._id);

          if (!checkId) {
              return res.status(404).send({ status: 'error', message: `The ID product: ${product._id} not found` });
          }
      }

      // Verificar si el carrito con el ID cid existe
      const checkIdCart = await cm.getCartById(cid);
      if (!checkIdCart) {
          return res.status(404).send({ status: 'error', message: `The ID cart: ${cid} not found` });
      }

      // Actualizar el carrito en la base de datos con la lista de productos actualizada
      const cart = await cm.updateProductsInCart(cid, products);
      return res.status(200).send({ status: 'success', payload: cart });
  } catch (error) {
      console.log(error);
      return res.status(500).send({ status: 'error', message: 'An error occurred while processing the request' });
  }
});

// ENDPOINT para eliminar un producto dado de un carrito
routerC.delete('/:cid/product/:pid', async (req, res) => {
  try {
      // Extraer los parámetros de la URL: cid (ID del carrito) y pid (ID del producto)
      const { cid, pid } = req.params;

      // Verificar si el producto con el ID pid existe
      const checkIdProduct = await pm.getProductById(pid);
      if (!checkIdProduct) {
          return res.status(404).send({ status: 'error', message: `Product with ID: ${pid} not found` });
      }

      // Verificar si el carrito con el ID cid existe
      const checkIdCart = await cm.getCartById(cid);
      if (!checkIdCart) {
          return res.status(404).send({ status: 'error', message: `Cart with ID: ${cid} not found` });
      }

      // Buscar el índice del producto en la lista de productos del carrito
      const findProductIndex = checkIdCart.products.findIndex((product) => product._id.toString() === pid);
      if (findProductIndex === -1) {
          return res.status(404).send({ status: 'error', message: `Product with ID: ${pid} not found in cart` });
      }

      // Eliminar el producto de la lista de productos del carrito
      checkIdCart.products.splice(findProductIndex, 1);

      // Actualizar el carrito en la base de datos sin el producto eliminado
      const updatedCart = await cm.deleteProductInCart(cid, checkIdCart.products);

      return res.status(200).send({ status: 'success', message: `Deleted product with ID: ${pid}`, cart: updatedCart });
  } catch (error) {
      console.log(error);
      return res.status(500).send({ status: 'error', message: 'An error occurred while processing the request' });
  }
});


   // ENDPOINT que elimina todos los productos de un carrito
   routerC.delete('/:cid', async (req, res) => {
    try {
      const { cid } = req.params;
      const cart = await cm.getCartById(cid);
  
      if (!cart) {
        return res.status(404).send({ message: `Cart with ID: ${cid} not found` });
      }
  
      if (cart.products.length === 0) {
        return res.status(404).send({ message: 'The cart is already empty' });
      }
  
      // Vaciar el carrito estableciendo la propiedad 'products' como un arreglo vacío.
      cart.products = [];
  
      await cm.updateOneProduct(cid, cart.products);
  
      return res.status(200).send({
        status: 'success',
        message: `The cart with ID: ${cid} was emptied correctly`,
        cart: cart,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: 'An error occurred while processing the request' });
    }
  });

export default routerC