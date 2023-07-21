import mongoose from "mongoose";

//cada uno de los productos que ingrese debera tener estas propiedades que estoy creando en mi esquema
//
const productsSchema= new mongoose.Schema({
    name:{
       type: String,
    required:true,
    unique:true
      },
    price:{
        type: Number,
        required:true
    },
    stock:{
        type: Number,
        required:true
    }
})



//le debo pasar el esquema y el nombre 
//aca le digo a moongose que este sera el modelo de esta coleecion y le paso dos parametros
//el nombre y el esquema
//con esto se me crea una coleccion Products que tendra un esuqema(estrucra)

export const productModel=mongoose.model('Products',productsSchema)