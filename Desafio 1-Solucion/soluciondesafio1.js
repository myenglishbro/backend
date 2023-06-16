class ProductManager {
    constructor(){
        this.products=[
           
        ]
    }

    getProducts=()=>{
        return this.products
    }

    generateIds=()=>{
        const counter = this.products.length
        if(counter===0){
            return 1
        }
        else{
            return (this.products[counter-1].id)+1
        }
    }

    addProduct=(title, description, price,thumbnail,code,stock)=>{
    
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.error("Ingrese todos los datos del product")
            return
        }
        else{
                
        const productfiltrado= this.products.find(element=>element.code==code)  
        const id=this.generateIds();
           if (!productfiltrado){
            const newproduct={
                  id,
                 title,
                 description,
                  price,
                  thumbnail,
                  code,
                  stock
            }
           return this.products.push(newproduct)
           }

           else{
            console.error("El codigo del producto ya existe")
           }
        
        }
  
    }

    getProdudctById=(id)=>{
      const productencontrado=this.products.find(element=>element.id==id)
      if (!productencontrado)
      {
        console.error("NOT FOUND")
        return
      }

      else{
        return productencontrado
      }
    }
}

const productmanager = new ProductManager();
productmanager.addProduct("product1","description1",12,"url","code1",500)
 productmanager.addProduct("product2","description2",13,"url","code2",600)
productmanager.addProduct("product3","description3",16,"url","code3",600)
productmanager.addProduct("product4","description4",19,"url","code4",700)
 productmanager.addProduct("product5","description5",29,"url","code5",700)
 productmanager.addProduct("product6","description6",22,"url","code6",700)

console.log(productmanager.getProducts())
console.log(productmanager.getProdudctById(2))