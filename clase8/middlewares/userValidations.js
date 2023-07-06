export const validarUsuario=(req,res,next)=>{
    const user=req.body
    if(user.name==="mathias"){
      res.send("tu no estas autorizado")
    }
    else{
      next()
    }
  }