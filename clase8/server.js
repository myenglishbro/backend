import express from "express"
import usuarioRouter from "./routes/usuarios.router.js"
import { __dirname } from "./utils.js"
const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public"))
app.use("/api/usuarios",usuarioRouter)

app.listen(8080,()=>{
    console.log("server up")
})