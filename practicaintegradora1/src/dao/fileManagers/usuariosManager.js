import fs from "fs";
import { __dirname } from "../../utils.js";

const path = __dirname + "/Users.json";

export default class UsuariosManagers {
  async getUsers() {
    if (fs.existsSync(path)) {
      try {
        const Users = await fs.promises.readFile(path, "utf-8");
        const usersParse = JSON.parse(Users);
        return usersParse;
      } catch (err) {
        console.log(err);
      }
    } else {
      return [];
    }
  }

  async addUsers(obj) {
   try{
     const users =await this.getCourses()
     let id
     if(users.length===0){
        id=1
     }
     else{
        id=users[(users.length)-1].id +1
     }
     const newUser={id,...obj}
     users.push(newUser)
     await fs.promises.writeFile("path",JSON.stringify(users))
     return newUser
   }
   catch(err){
 console.log(err)
   }
  }
}
