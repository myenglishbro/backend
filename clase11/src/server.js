import express from "express"
import { __dirname } from "./utils.js"
import handlebars from "express-handlebars"
import {Server, Socket} from "socket.io"
import viewRouter from "./routes/views.router.js"
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//archivos estaticos
app.use(express.static(__dirname +"/public"))

//motores de plantillas

app.engine("handlebars",handlebars.engine())
app.set("views",__dirname+"/views")
app.set("view engine","handlebars")

app.use("/",viewRouter)
//rutas



const httpServer=app.listen(8080,()=>{
    console.log("server connected")
}) 

//websocket
export const socketServer=new Server(httpServer)

const mensajes=[]
socketServer.on("connection",socket=>{
    console.log(`Usuario con ${socket.id} conectado `)

    socket.on("nuevousuario",(usuario)=>{
     console.log("usuario" ,usuario)
     socket.broadcast.emit("broadcast",usuario)
    })
    socket.on("disconnect",()=>{
        console.log(`Usuario con ID : ${socket.id} esta desconectado `)
    })

    socket.on("mensaje",info=>{
        mensajes.push(info)
        socketServer.emit("chat",mensajes)
    })
})
