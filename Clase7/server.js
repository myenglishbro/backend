import express from "express"
import UsersManager from "./Users.js"
const manager =new UsersManager("./usuarios.json") 
const app=express()
//para que el servidor pueda entender todos los formatos que le lleeguen
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/api/users",async(req,res)=>{
   const users=await manager.getUsers()
   res.json({users})
})

app.get("/api/users/:id",async(req,res)=>{
    const {id}=req.params
    const foundUser=await manager.getUsersbyId(parseInt(id))
        res.json({foundUser})

})

app.post("/api/users",async(req,res)=>{
    const obj=req.body
    console.log(obj)
    const usuario=await manager.createUser(obj)
    res.json({message:"Usuario creado con exito ",usuario})
})

app.put("/api/users/:id",(req,res)=>{
    
})
app.delete("/api/users",(req,res)=>{
    
})
app.delete("/api/users/:id",(req,res)=>{
    
})


app.listen(8080,()=>{
    console.log("Server Working");
})