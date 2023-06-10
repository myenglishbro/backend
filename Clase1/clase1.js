//! LECCION 1 INTRODUCCION
//! ESTO ES UN REPASO DE ALGUNAS FUNCIONES EN JAVASCRIPT

 // * función Math.abs en JavaScript:
 console.log(Math.abs(5));        // 5
console.log(Math.abs(-5));       // 5
console.log(Math.abs(0));        // 0
console.log(Math.abs(-10.25));   // 10.25
console.log(Math.abs(NaN));      // NaN
console.log(Math.abs("abc"));    // NaN

  // * función toString() en JavaScript:
  const numero = 42;
  const cadena = numero.toString();
  console.log(cadena); // "42"
  console.log(typeof cadena); // "string"

  // * función split('') en JavaScript: 
  //*  recuerda que el "" devuelve caracter por caracter ,"(1-espacio) "divide donde encuntre un espacio 
  const cadena2 = "Hola";
//   const arreglo = cadena2.split(' ');
//   console.log(arreglo); // ["H", "o", "l", "a"]
const frase = "Hola, ¿cómo  estás?";
const arreglo3 = frase.split(' ');
console.log(arreglo3); // ["Hola,", "¿cómo", "estás?"]


const arreglo = [1, 2, 3, 4, 5];
arreglo.reverse();
console.log(arreglo); // [5, 4, 3, 2, 1]
 //TODO Unir elementos de un arreglo en una cadena de texto
 const arreglo0 = ['Hola', 'mundo', '!'];
 const cadena0 = arreglo0.join(' ');
 console.log(cadena0); // "Hola mundo !"
   //TODO Unir elementos de un arreglo Unir elementos de un arreglo sin separadores
   const arreglo1 = [1, 2, 3, 4, 5];
   const cadena1 = arreglo1.join('');
   console.log(cadena1); // "12345"
  //TODO Unir caracteres de una cadena de texto en una cadena de texto
  const cadenastring = "Hola";
 const arreglo2 = cadenastring.split('').join('-');
 console.log(arreglo2); // "H-o-l-a"
 
//TODO Ejemplo 2: Invertir el orden de los caracteres en una cadena de texto 
const cadenas = "Hola";
const arreglo5 = cadenas.split('').reverse().join('');
console.log(arreglo5); // "aloH
//? crea una funcion que me devuelva true o false si es el numero invertido ya sea positivo o negativo 
function invertido(num1, num2) {
    if (num1 < 0 || num2 < 0) {
      return Math.abs(num1).toString() === Math.abs(num2).toString().split('').reverse().join('');
    } else {
      return num1.toString() === num2.toString().split('').reverse().join('');
    }
  }
const valor=invertido(15,51)
  console.log(valor)