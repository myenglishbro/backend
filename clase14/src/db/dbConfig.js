//para manipular la base de datos
import mongoose from "mongoose"


const URI=`mongodb+srv://carlosapolayasanchez:sixx1am1@cluster0.cbayzpv.mongodb.net/ecommerce?retryWrites=true&w=majority`
//para conectarme a la base por mongoose y le debo pasar la URI PARA ENLAZAR EL ATLAS CON LA APLICACION
// mongoose.connect(URI,(error)=>{
//     if(error){
//         console.log("error en la conexion")
//     } 
//     else{
//         console.log("conectado a atlas")

//     }
// })
mongoose.connect(URI)
