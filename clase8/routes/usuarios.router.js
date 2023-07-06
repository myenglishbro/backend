import {Router} from "express"
import { validarUsuario } from "../middlewares/userValidations"
import { upload } from "../middlewares/multer.js"
const router =Router()
const usuarios=[{
    name:"carlos"
}]


router.get("/",(req,res)=>{

  res.json({usuarios});
})
router.post("/",validarUsuario,upload,(req,res)=>{
    const obj=req.body
    usuarios.push(obj)
    res.send({message:"user added"})
    
})
router.put("/",()=>{
    
})
router.delete("/",()=>{
    
})

export default router
