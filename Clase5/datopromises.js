const fs=require ('fs')
const filename='./base3.txt'
const obj={
    nombre:"carlos",
    apellido:"apolaya"
}
const operacion=async()=>{
    await fs.promises.writeFile(filename,JSON.stringify(obj))
    console.log("creacion exitosa")

    // console.log("update exitosa")
    // await fs.promises.appendFile(filename,"\ncontenido2")

    const contenido= await fs.promises.readFile(filename,"utf-8")
    console.log(JSON.parse(contenido))

    // await fs.promises.unlink(filename)
    // console.log("base eliminada")
}

operacion()