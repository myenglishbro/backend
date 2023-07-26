import  {productsModel}  from "../models/products.model.js"

  export default class ProductManager{

  
    getProducts = async () => {
      try {
          return await productsModel.find().lean();
      } catch (err) {
          return err
      }
  }


  getProductById = async (id) => {
    try {
        return await productsModel.findById(id)
        
    } catch (err) {
        return {error: err.message}
    }

}



addProduct = async (product) => {
  try {
      await productsModel.create(product);
      return await productsModel.findOne({ title: product.title })
  }
  catch (err) {
      return err
  }

}
      
    

updateProduct = async (id, product) => {
  try {
      return await productsModel.findByIdAndUpdate(id, { $set: product });
  } catch (err) {
      return err
  }

}

    
    //  updateProduct=async(id,obj)=>{
    //      console.log(obj)
    //     const productUpdated=await productsModel.updateOne({_id:id},obj)
    //     return productUpdated
    //   }


      //DELETE
      
      deleteProduct = async (id) => {
        try {
            return await productsModel.findByIdAndDelete(id);
        } catch (err) {
            return err
        }

    }

}
