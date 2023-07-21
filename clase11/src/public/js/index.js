
const socketClient=io()
const nombreUsuario=document.getElementById("nombreusuario")
const formulario=document.getElementById("formulario")
const inputmensaje=document.getElementById("mensaje")
const chat=document.getElementById("chat")




let usuario=null

if(!usuario){
    Swal.fire({
        title:"Welcome to my English Class",
        text:"Ingresa tu usuario",
        input:"text",
        inputValidator:(value)=>{
            if(!value){
                return "Necesitas ingresar tu Nombre"
            }
        }
    })
    .then(username=>{
        usuario=username.value
        nombreUsuario.innerHTML=usuario
        socketClient.emit("nuevousuario",usuario)
    })
}

formulario.onsubmit=(e)=>{
    e.preventDefault()
    const info={
        nombre:usuario,
        mensaje:inputmensaje.value
    }
    socketClient.emit("mensaje",info)
    inputmensaje=" "

}

 socketClient.on("chat",mensaje=>{
   const chatrender=mensaje.map(e=>{
    return `<p><strong>${e.nombre}</strong>${e.mensaje}`}).join(" ")
   chat.innerHTML=chatrender
   
   
 })

 socketClient.on("broadcast",usuario=>{
    Toastify({
        text:`Ingreso ${usuario} al chat`,
        duration:5000,
        position:'right',
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
    }).showToast()
 })