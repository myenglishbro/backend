const socketClient=io()
//con esto ya tengo el socket del lado del cliente

socketClient.on("saludo",(mensaje)=>{

    console.log(mensaje)

    socketClient.emit("respuestaSaludo","MUCHAS GRACAIS")
}
)

const formulario=document.getElementById("formulario")
const inputNombre=document.getElementById("nombre")
const inputMensaje=document.getElementById("mensaje")
const parrafoMensajes=document.getElementById("parrafoMensajes")

formulario.onsubmit=(e)=>{
    e.preventDefault() //para que no se refresque la pagina
    const nombre=inputNombre.value
    const mensaje=inputMensaje.value
    socketClient.emit("mensaje",{nombre,mensaje})
 
}

socketClient.on("rptmensajes",(arreglo)=>{
    console.log(arreglo)
    let informensajes=""
    arreglo.forEach(element => {
        informensajes+=`el usuario ${element.nombre} dice ${element.mensaje} </br>`
    });
    parrafoMensajes.innerHTML=informensajes
})

