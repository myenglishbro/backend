// console.log("1 proceso")
// console.log("2 proceso")
// console.log("3 proceso")
// console.log("4 proceso")

// const mostrar=()=>{
//     setTimeout(()=>{
//      console.log("proceso timeout")
//     },3000)
// }

// mostrar();


const sumar=(num1,num2)=>{
  return new Promise((received,rejected)=>{
         const flag=false
         if(flag){
           const suma = num1+num2  
           received(suma)
         
         }
         else{
          rejected('no se puede sumar')
         }

  });
}

async function calcularsuma(num1,num2,funct){
    const result= await sumar(num1,num2)
    try{
        return result
    }
    catch{
        return console.log(object);
    }
}

calcularsuma(5,4,sumar)





// const agregar=(i)=>{
//   return i+1
// }

// const arrayold=[1,2,3,4,5]
// const newarray= arrayold.map(agregar)
// console.log(newarray)