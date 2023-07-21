import express from "express"
import {__dirname} from "./utils.js"
import handlebars from "express-handlebars"
import viewRouter from "./routes/view.router.js"
import usuarioRouter from "./routes/usuario.router.js"
import cursoRouter from "./routes/curso.router.js"
import "./dao/dbConfig.js"
const PORT=process.env.PORT||8080
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname +"/public"))

app.engine("handlbars",handlebars.engine())
app.set("views",__dirname+"/views")
app.set("view engine","handlebars")

app.use("/cursos",cursoRouter)
app.use("/usuarios",usuarioRouter)
app.use("/views",viewRouter)


app.listen(PORT,()=>{
    console.log("server up")
})