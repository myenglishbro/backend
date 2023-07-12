import express from "express"
import {__dirname} from "./utils.js"
import handlebars from "express-handlebars"

import viewRouter from "./routes/view.router.js"
import userRouter from "./routes/user.router.js"

const app= express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname +"/public"))

//configurar handlebars
app.engine("handlebars",handlebars.engine())  //para crear mi motor le paso el nombre, y la funcion lo que hara pero como uso hanbdlebars solo lo importo sino le tendria que pasar la sintaxis
app.set("views",__dirname+"/views")  //para decirle donde estaran los motores de plantillas
app.set("view engine","handlebars")  //para endicarle que motor de plantilla se usara (debo agregar una confi extra si es handlebars ocreo mi propio mi propia plantilla desde cero )
//rutas
app.use("/users",userRouter)
app.use("/views",viewRouter)

app.listen(8080,()=>{
    console.log("server up")
})