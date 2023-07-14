import fs from "fs";

export default class ProductManager {
  constructor(path) {
    (this.path = path), (this.products = []);
  }
  //READ
  getProducts = async (info) => {

    try {
      const { limit } = info;

      if (fs.existsSync(this.path)) {
      
        const productlist = await fs.promises.readFile(this.path, "utf-8");
        const productlistJs = JSON.parse(productlist);
        if (limit) {
          const limitProducts = productlistJs.slice(0, parseInt(limit));
          return limitProducts;
        } else {
          return productlistJs;
        }
      } else {
        return [];
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  getProductbyId = async (id) => {
    try {
      const {pid}=id
      if (fs.existsSync(this.path)) {
        const allproducts = await this.getProducts({});
        const found = allproducts.find((element) => element.id === parseInt(pid));
        if (found) {
          return found;
        } else {
          throw new Error("Producto no existe");
        }
      } else {
        throw new Error("Product file not found");
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  
  
  
  //GENERATE ID
  generateId = async () => {
    try {
      if (fs.existsSync(this.path)) {
        const productlist = await fs.promises.readFile(this.path, "utf-8");
        const productlistJs = JSON.parse(productlist);
        const counter = productlistJs.length;
        if (counter == 0) {
          return 1;
        } else {
          return productlistJs[counter - 1].id + 1;
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  //CREATE
  addProduct = async (obj) => {
    const {title, description, price, thumbnail,category,status=true, code, stock}=obj
    if (!title || !description || !price || !category || !code ||!status || !stock) {
      console.error("INGRESE TODOS LOS DATOS DEL PRODUCTO");
      return;
    } else {
      const listadoProductos=await this.getProducts({})
      const codigorepetido = listadoProductos.find(
        (elemento) => elemento.code === code
      );
      if (codigorepetido) {
        console.error("EL CODIGO DEL PRODUCTO QUE DESEA AGREGAR ES REPETIDO");
        return;
      } else {
        const id = await this.generateId();
        const productnew = {
          id,
          title,
          description,
          price,
          category,
          status,
          thumbnail,
          code,
          stock,
        };
        listadoProductos.push(productnew);
        await fs.promises.writeFile(this.path,
          JSON.stringify(listadoProductos, null, 2)
        );
      }
    }
  };

  //UPDATE
  updateProduct = async (id,obj) => {
    const {pid}=id
    const {title, description, price, category,thumbnail, status,code, stock}=obj
         if(title===undefined || description===undefined || price===undefined || category===undefined || status===undefined || code===undefined||stock===undefined){
      console.error("INGRESE TODOS LOS DATOS DEL PRODUCTO PARA SU ACTUALIZACION");
      return;
    } else {
      const listadoProductos = await this.getProducts({});
      const codigorepetido = listadoProductos.find( (i) => i.code === code);
      if (codigorepetido) {
        console.error(
          "EL CODIGO DEL PRODUCTO QUE DESEA ACTUALIZAR ES REPETIDO"
        );
        return;
      } else {
        const listadoProductos = await this.getProducts({});
        const newProductsList = listadoProductos.map((elemento) => {
          if (elemento.id === parseInt(pid)) {
                    const updatedProduct = {
                      ...elemento,
                      title,
                      description,
                      price,
                      category,
                      status,
                      thumbnail,
                      code,
                      stock
                    };
            return updatedProduct;
          } else {
            return elemento;
          }
        });
        await fs.promises.writeFile(this.path,JSON.stringify(newProductsList, null, 2));
     
      }
    }
  };

  //DELETE
  deleteProduct = async (id) => {
    const allproducts = await this.getProducts({});
    const productswithoutfound = allproducts.filter(
 (elemento) => elemento.id !==  parseInt(id)
    );
    await fs.promises.writeFile(this.path,JSON.stringify(productswithoutfound, null, 2)
    );
      return "Producto Eliminado"

  };
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
