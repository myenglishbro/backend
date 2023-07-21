import { Router } from "express";

import { pokedexModel } from "../dao/models/pokedex.model.js";



const router=Router()


router.get("/",async(req,res)=>{
    const pokemons=await pokedexModel.find().lean().exec() 
    console.log(pokemons)
  res.render("list",{pokemons})
})
router.get("/create",(req,res)=>{
    res.render("create")

})
router.get("/:name",(req,res)=>{
    const name=req.params.name
    res.send(`Mostrando el pokemon ${name}`)

})
router.post("/",async(req,res)=>{
    const obj=req.body
    console.log(obj)
    const pokemonnuevo=new pokedexModel(obj)
    await pokemonnuevo.save()
    res.redirect("/pokedex/" + pokemonnuevo.name)

})


router.delete("/:id",(req,res)=>{
    const id=req.params.id
    res.send(`Borrando pokemon con id: ${id}`)

})

export default router 