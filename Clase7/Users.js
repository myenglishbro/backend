import fs from "fs"
export default class UsersManager{
    constructor(path){
        this.path=path
    }

    getUsers=async()=>{
      try{
        if(fs.existsSync(this.path)){
            const usersFiles=await fs.promises.readFile(this.path,"utf-8")
            const usersJs=JSON.parse(usersFiles)
            return usersJs
        }
        else{
        return []
        }
      }
      catch(error){
        throw new Error(error)
      }
    }

    getUsersbyId=async(id)=>{
    try{
        const users=await this.getUsers()
        const user=users.find(element=>element.id===id)
        if(user){
           return user
        }
        else{
            throw new Error("Usuario no existe")
        }
    }
    catch(error){
        throw new Error(error)

    }

    }

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

