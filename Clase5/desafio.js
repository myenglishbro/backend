const fs=require("fs")
const filename="./package.json"

const operacion=async()=>{
   const data= await fs.promises.readFile(filename,'utf-8')
    let obj= JSON.parse(data)
   obj.author="carlos apolaya"
   console.log(obj)

   await fs.promises.writeFile(filename,JSON.stringify(obj,null,2))
   console.log("update success!")
}
operacion()