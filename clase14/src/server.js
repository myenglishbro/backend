import express from "express"
import productsRouter from "./routes/products.router.js"
import "./db/dbConfig.js"

const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",productsRouter)




const PORT= process.env.PORT|| 8080
app.listen(PORT,()=>{
    console.log(`server up ${PORT}`)
})