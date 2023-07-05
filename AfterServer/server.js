import express from 'express'
const app=express()


app.use(express.json)
app.use(express.urlencoded({extended:true}))
//rutas

app.get("/users",(req,res)=>{
  
})
app.listen(8080,()=>{
    console.log("server up")
})