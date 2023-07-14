const socketClient =io()

socketClient.on("actualizacion",(obj)=>{
    console.log(obj)
})


