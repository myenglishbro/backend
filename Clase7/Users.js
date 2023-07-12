import fs from "fs"
export default class UsersManager{
    constructor(path){
        this.path=path
    }

    getProducts = async (info) => {

      try {
        const { limit } = info; // Asigna un objeto vacío como valor predeterminado si info es undefined
  
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
        const {pid} = id;
        if (fs.existsSync(this.path)) {
          const allproducts = await this.getProducts();
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

    idGenerator = async () => {
        try {
          let counter = 0;
          if (fs.existsSync(this.path)) {
            const userFiles = await fs.promises.readFile(this.path, "utf-8");
            counter = JSON.parse(userFiles).length;
          }
          if (counter === 0) {
            return 1;
          } else {
            const users = await this.getUsers();
            return users[users.length - 1].id + 1;
          }
        } catch (error) {
          throw new Error(error);
        }
      };

    createUser=async(obj)=>{
        const userFiles=await this.getUsers()
        // const {name,lastname}=obj
        const id=await this.idGenerator()
        const newuser={
            id,...obj
        }
        userFiles.push(newuser)
        await fs.promises.writeFile(this.path,JSON.stringify(userFiles,null,2))
       return newuser
    }

    updateUser=()=>{

    }

    deleteUser=()=>{

    }
}

