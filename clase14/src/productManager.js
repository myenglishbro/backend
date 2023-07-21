
import { productModel } from "./db/models/products.model.js"

export default  class productManager{
  getProducts=async()=>{
   try{
    const products=await productModel.find({})
    return products
   }
   catch(err){
    console.log(err)
   }

  }


  getProductbyId=async(pid)=>{

    try{
        const product=await productModel.findById(pid)
        console.log(product)
        return product
       }
       catch(err){
        console.log(err)
       }
    
  }

   async createProduct(obj){
    try{
     
        const newProduct=await productModel.create(obj)
        return newProduct
       }
       catch(err){
        console.log(err)
       }
   }


   async deletebyId(id){
    try{
     
        const deletedProduct=await productModel.findByIdAndDelete(id)
        return deletedProduct
       }
       catch(err){
        console.log(err)
       }
   }
}