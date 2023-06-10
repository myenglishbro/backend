const person={
    first:"carlos",
    lastname:"apolaya",
    titkok:"myenglishbro",
    company:"ucollege"
}
const displayName=(object)=>{
   const {first,lastname}=object
   return `${first}`+`${lastname}`
}
console.log(displayName(person))  

// const displayName = (object) => {
//     return `${object.first}${object.lastname}`;
//   };
  
//   console.log(displayName(person));
