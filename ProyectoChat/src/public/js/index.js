const socketClient=io()

const formulario =document.getElementById("formulario")
const usuario =document.getElementById("usuario")
const mensaje =document.getElementById("mensaje")
const chat =document.getElementById("chat")


formulario.onsubmit=(e)=>{
    e.preventDefault()
    const user=usuario.value
    const message=mensaje.value
    const obj={
        user,message
    }

    socketClient.emit("chatear",obj)
}

socketClient.on("chatupdate",(obj)=>{
   
    const chatrender=obj.map(e=>
        {return `<p>${e.user} dice : ${e.message}</p>`}).join(" ")
        chat.innerHTML=chatrender

})


 