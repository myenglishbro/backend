const fs = require("fs")
const crypto= require("crypto")

const path="./Usuarios.json"

class ManagerUsuarios{


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

    usuario.salt=crypto.randomBytes(128).toString("base64")
    usuario.password=crypto.createHmac("sha256",usuario.salt).update(usuario.password).digest("hex")

    usuariosArchivos.push(usuario)
     await fs.promises.writeFile(path,JSON.stringify(usuariosArchivos,null,2))
     

  }

  async validateUser(userName,contrasena){
   const usuariosArchivos=await this.getUsers()
   const usuario=usuariosArchivos.find(u=>u.user===userName)
   if(!usuario){
    console.log("user not found")
    return
   }
   else{
    const nuevaCrypto=crypto.createHmac("sha256",usuario.salt).update(contrasena).digest("hex")
    if(usuario.password===nuevaCrypto){
   console.log("lOGUEADO")
    }
    else{
      console.log("Error: contraseña invalidad")
    
   }


  }
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