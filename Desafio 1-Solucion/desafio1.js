class ProdutManager{
    constructor(){
        this.products=[]
    }
     
    getProducts=()=>{
        return this.products
    }
    generatorId=()=>{
        const count=this.products.length
        if(count===0)
        {
            return 1
        }

        else{
            return (this.products[count-1].id) +1
        }
    }


    addProduct=(title,description,price,thumbnail,code,stock)=>{
     const id=this.generatorId()
     if(!title || !description || !price || !thumbnail || !code || !stock){
        console.error("el producto no puede ser agregado por que faltan datos");
        return
      }

     const existingProduct = this.products.find(item => item.code === code);
     if (existingProduct) {
      console.error("codigo existente");
      return 
     } else {
     
      
        
      this.products.push({
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      });
     }
   }


   getProductbyId=(id)=>{
  const product=this.getProducts().find(item=>item.id===id)
  if (!product){
    console.error("Not found")
    return;
  }
  else{
    return product
  }
   }
}

 const productManager= new ProdutManager()
 productManager.addProduct("producto1","descripcion 1",23,"url","a2ws",13)

   productManager.addProduct("producto2","descripcion 2",24,"url","a2wt",15)

  productManager.addProduct("producto3","descripcion 3",26,"url","a2w3",18)
 console.log(productManager.getProducts())
 console.log("producto por id")
 console.log(productManager.getProductbyId(4))
