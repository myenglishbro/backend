import { Router } from "express";
// import CursosManager from "../dao/fileManagers/cursosManager.js"

import CoursesManager from "../dao/mongoManagers/coursesManajer.js";
const router =Router()
// const cmanager=new CursosManager()
const cmanager=new CoursesManager()

router.get("/",async(req,res)=>{
  const cursos= await cmanager.getCourses()
  if(cursos.length ===0){
    res.json("No hay cursos creado")

  }
  else{
    res.json({message:"success",cursos})
  }
})


router.post("/",async(req,res)=>{
  const obj=req.body
  const newcurso= await cmanager.addCourses(obj)
  res.json({message:"curso creado conj exito",newcurso})
})





export default router