import express from "express"
import handlebars from "express-handlebars"
import {__dirname} from "./utils.js"
import {Server} from "socket.io"
import chatRouter from "./routes/chat.router.js"

const app = express()
const PORT=8080
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public"))
app.engine("handlebars",handlebars.engine())
app.set("view engine","handlebars")
app.set("views",__dirname+"/views")

app.use("/",chatRouter)

const httpServer=app.listen(PORT,()=>{
    console.log("Server is working")
})

const socketServer= new Server(httpServer)

const base=[]
socketServer.on("connection",(socket)=>{
  console.log("usuario conectado con id :",socket.id)
  socket.on("disconnect",()=>{
    console.log("usuario desconectado con id: ",socket.id)
  })

  socket.on("chatear",obj=>{
    base.push(obj)
    socketServer.emit("chatupdate",base)

  })

})

