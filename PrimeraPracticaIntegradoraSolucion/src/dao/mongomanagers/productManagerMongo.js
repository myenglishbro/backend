import  {productsModel}  from "../models/products.model.js"

  export default class ProductManager{

  
    getProducts=async()=>{
      try{
       
          const productlist= await productsModel.find({}).lean().exec()
        return productlist
        
    
      }
      catch(error)
     {
      return {
        code: 500,
        status: "Error",
        message: error.message
      };
     }
    }


    getProductbyId=async(id)=>{
      const{pid}=id
      const allproducts=await this.getProducts({})
     const found=allproducts.find(element=>element.id===parseInt(pid))
     if(found){
      return found
     }
     else{
    console.error("Producto no encontrado")
     }
  }



    //CREATE
    addProduct=async(obj)=>{
      try{
     const newproduct=await productsModel.create(obj)
     return {
      code: 202,
      status: 'Success',
      message: `El producto ${newproduct.title} ha sido agregado con éxito. Su ID interno es ${newproduct._id}`
    };
      }
     catch(error){
      return {
        code: 400,
        status: 'Error',
        message: `${error}`
      };
        }    
           
   
     }
      
    


     //UPDATE
     updateProduct=async(id,obj)=>{
         console.log(obj)
        const productUpdated=await productsModel.updateOne({_id:id},obj)
        return productUpdated
      }


      //DELETE
      
      async deleteProduct(pid) {
        try {
          const productToDelete=await productsModel.findByIdAndDelete({_id:pid})
      
          if (productToDelete) {
            return {
              code: 202,
              status: 'Success',
              message: `El producto con ID ${pid} ha sido eliminado exitosamente.`
            };
          } else {
            return {
              code: 404,
              status: 'Error',
              message: `No se encontró un producto con ID ${pid}.`
            };
          }
        } catch (error) {
          return {
            code: 400,
            status: 'Error',
            message: `${error}`
          };
        }
      }

}
