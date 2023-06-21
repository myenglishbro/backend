const fs=require ('fs')
const filename='./base2.txt'



fs.writeFile(filename,"mensaje1",error=>{
    if(error) return console.log("error al crear la base")
    console.log("creacion exitosa")
         fs.appendFile(filename,"\nmensaje2",error=>{
        if(error) return console.log("error al actualizar la base")
        console.log("actualizacion exitosa")
            fs.readFile(filename,"utf-8",(error,contenido)=>{
                    if(error) return console.log("error al mostrar la base")
                    console.log(contenido)
                    })
                    // fs.unlink(filename,(error)=>{
                    //     if(error) return console.log("error al eliminar la base")
                    //     console.log("eliminacion exitosa")
                    //     })
                     

        })
})




console.log("fin del programa")