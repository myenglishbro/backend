import mongoose from "mongoose";


const PokeCollection="pokemons"
const pokedexSchema= new mongoose.Schema({
    id:{
        type:Number,
    },
    name:{
        type:String,
        required:true ,
        unique:true
    },
    type:{
        type:String,
        required:true 
    },
    photo:{
        type:String
    }
})

export const  pokedexModel=mongoose.model(PokeCollection,pokedexSchema)