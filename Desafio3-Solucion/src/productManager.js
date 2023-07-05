import fs from "fs"

export default class ProductManager{
    constructor(path){
        this.path=path,
     this.products=[  
     ]
    }
    //READ
    getProducts=async()=>{
    const productlist= await fs.promises.readFile(this.path,"utf-8")
    const productlistparse=JSON.parse(productlist)
    return productlistparse
    }
    //GENERATE ID 
    generateId=async()=>{
        const counter=this.products.length
        if(counter==0){
            return 1
        }
        else{
            return (this.products[counter-1].id)+1
        }
    }
    //CREATE
    addProduct=async(title,description,price,thumbnail,code,stock)=>{
      if(!title || !description || !price || !thumbnail|| !code||!stock){
        console.error("INGRESE TODOS LOS DATOS DEL PRODUCTO")
        return 
      }
      else{
        const codigorepetido=this.products.find(elemento=>elemento.code===code)
        if(codigorepetido){
             console.error("EL CODIGO DEL PRODUCTO QUE DESEA AGREGAR ES REPETIDO")
             return
        }
        else{
            const id=await this.generateId()
            const productnew={
                id,title,description,price,thumbnail,code,stock
            }
            this.products.push(productnew)
            await fs.promises.writeFile(this.path,JSON.stringify(this.products,null,2))
        }
      }
    }


     //UPDATE
     updateProduct=async(id,title,description,price,thumbnail,code,stock)=>{
        if(!id|| !title || !description || !price || !thumbnail|| !code||!stock){
          console.error("INGRESE TODOS LOS DATOS DEL PRODUCTO PARA SU ACTUALIZACION")
          return 
        }
        else{
            const allproducts=await this.getProducts()
            const codigorepetido=allproducts.find(elemento=>elemento.code===code)
            if(codigorepetido){
                 console.error("EL CODIGO DEL PRODUCTO QUE DESEA ACTUALIZAR ES REPETIDO")
                 return
            }
            else{
                const currentProductsList=await this.getProducts()
                const newProductsList=currentProductsList.map(elemento=>{
                    if(elemento.id===id){
                      const updatedProduct={
                        ...elemento,
                        title,description,price,thumbnail,code,stock
                      }
                      return updatedProduct
                    }
                    else{
                        return elemento
                    }
                })
                await fs.promises.writeFile(this.path,JSON.stringify(newProductsList,null,2))
            }
            
        }
      }


      //DELETE
      deleteProduct=async(id)=>{
        const allproducts=await this.getProducts()
        const productswithoutfound=allproducts.filter(elemento=>elemento.id!==id)
       await fs.promises.writeFile(this.path,JSON.stringify(productswithoutfound,null,2))
      }
    getProductbyId=async(id)=>{
        const allproducts=await this.getProducts()
       const found=allproducts.find(element=>element.id===id)
       return found
    }


}

// async function generator(){
    
// const productmanager=new ProductManager("./files/products.json");
// // await productmanager.addProduct("product1","description1",1500,"url","abc123",500)
// // await productmanager.addProduct("product2","description2",1500,"url","abc122",500)
// // await productmanager.addProduct("product3","description2",1500,"url","abc125",500)
// // await productmanager.updateProduct(3,"zzzzz","xxxxxx",1500,"url","abc126",500)
// //await productmanager.deleteProduct(2)
// const solo=await productmanager.getProductbyId(1)

// //  const listado=await productmanager.getProducts()
//  console.log(solo)
// }

// generator()