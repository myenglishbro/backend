import express from "express"
import {Server} from "socket.io" //para crear el servidor qu utilize el protoco websocket
import {__dirname} from "./utils.js"

import handlebars from "express-handlebars"
const app =express()
console.log(__dirname)
app.use(express.static(__dirname+"/public"))


app.engine("handlebars",handlebars.engine())
app.set("views",__dirname+"/views")
app.set("view engine","handlebars")


app.get("/",(req,res)=>{
    res.render("websocket")
})




//servidor http
const httpServer=app.listen(8080,()=>{
    console.log("sever up") 
})

// para crear el servidro web socket se necesit del servidr http
//socket del lado del servidor configurado listi para usarse
const socketServer= new Server(httpServer) // creanado mi servidor websoket

const arreglo=[]
//le digo al socket server necesito que stes escuchando si hay un evento de tipo conecction

socketServer.on("connection",(socket)=>{
    const a=socket.id
    console.log("usuario conectado con id : " +a )
    // console.log(socket)

    socket.on("disconnect",()=>{
      console.log("usuario desconectado")
    })

    socket.emit("saludo","Bienvenido a websocke")

    socket.on("respuestaSaludo",(mensaje)=>{
console.log(mensaje)
    })

    socket.on("mensaje",(obj)=>{
        console.log(obj)
        arreglo.push(obj)
        // console.log(arreglo)
        // socket.emit("rptmensajes",arreglo) //esto solo seria a nivel de socketclient asi que lo paso a nivel global
        socketServer.emit("rptmensajes",arreglo) 
    }
)
})