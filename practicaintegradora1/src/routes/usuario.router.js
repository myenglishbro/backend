import { Router } from "express";
import CursosManagers from "../dao/fileManagers/cursosManager.js"
const router =Router()
const cmanager=new CursosManagers()

router.get("/",async(req,res)=>{
  const cursos= await cmanager.getCourses()
  if(cursos.lenght ===0){
    res.json("No hay cursos creado")

  }
  else{
    res.json("logrado")
  }
})






export default router