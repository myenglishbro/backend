import {Router} from "express"
import fs from "fs"
const path = "users.json";

const router=Router()
router.get("/",(req,res)=>{
res.render("formulario")
})

router.get("/users",async(req,res)=>{
    const listaUsuariosJson = await fs.promises.readFile(path, "utf-8");
    const listaUsuarios = JSON.parse(listaUsuariosJson);
    console.log(listaUsuarios)
    res.render("usuarios",{listaUsuarios})
    })
export default router