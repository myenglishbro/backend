import express from "express"
import handlebars from "express-handlebars"
import {__dirname} from "./utils.js"
import "./dao/dbConfig.js"
import pokedexRouter from "./routes/pokedex.router.js"
const app =express()


const PORT=process.env.PORT||8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public"))

app.engine("handlebars",handlebars.engine())
app.set("views",__dirname+"/views")
app.set("view engine","handlebars")

app.use("/pokedex",pokedexRouter)

const httpServer=app.listen(PORT,()=>{
    console.log("Server is working")
})

httpServer.on("error",e=>console.log(e))