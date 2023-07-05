import  fs from 'fs'

const path="./Usuarios.json"

export default class ManagerUsuarios{
   constructor(path){
    this.path=path
   }

   async getUsers(){
    if(fs.existsSync(path)){
        const users=await fs.promises.readFile(path,"utf-8")
        const usersparse=JSON.parse(users)
        return usersparse
    }
    else{
        return []
    }
   }

  async createUser(obj){
    const {nombre,apellido,user,password}=obj
    const usuario={
        nombre,apellido,user,password
    }
    const usuariosArchivos=await this.getUsers()



    usuariosArchivos.push(usuario)
     await fs.promises.writeFile(path,JSON.stringify(usuariosArchivos,null,2))
     

  }


}

const manager= new ManagerUsuarios()
const usuario1={
    nombre:"carlos",
    apellido:"apolaya",
    user:"temis",
    password:"izi"
}
async function prueba(){
    await manager.createUser(usuario1)
const usuarios=await manager.getUsers()
console.log(usuarios)
}

prueba()