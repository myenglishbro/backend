const express= require("express")

const app=express()


//le indico el puerto por donde escuchara el servidor
app.listen(8080, () => {
    console.log('El servidor está escuchando en el puerto 8080');
  });

  app.get("/",(request,response)=>{
    response.send("HOLA MUNDO")
  })