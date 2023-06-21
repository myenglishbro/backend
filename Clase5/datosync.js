const fs=require ('fs')
const filename='./base.txt'

if (fs.existsSync(filename)){
    fs.writeFileSync(filename,"primer dato")
    console.log("creacion exitosa")
    fs.appendFileSync(filename,"\nsegundo dato")
    console.log("actualizacion exitosa")
    const contenido=fs.readFileSync(filename,'utf-8')
    console.log(contenido)
    // fs.unlinkSync(filename)
    // console.log("base eliminada",'utf-8')
}
else{
console.log("no existe la base")
}



// fs.readFileSync()
// fs.appendFileSync()
// fs.unlinkSync()
