const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  };
  
  const { firstName: first, lastName: last, age: years } = person;
  
  console.log(first);  // 'John'
  console.log(last);   // 'Doe'
  console.log(years);  // 30


//   const person = {
//     firstName: 'John',
//     age: 30
//   };
  
//   const { firstName: first, lastName: last = 'Doe', age: years } = person;
  
//   console.log(first);  // 'John'
//   console.log(last);   // 'Doe' (valor predeterminado)
//   console.log(years);  // 30
  
const person2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  };
  
  const { firstName, lastName, age } = person2;
  
  console.log(firstName);  // 'John'
  console.log(lastName);   // 'Doe'
  console.log(age);        // 30
  