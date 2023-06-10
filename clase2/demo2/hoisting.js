/* El hoisting (elevación o izado en español) es un comportamiento en JavaScript donde las declaraciones de variables y funciones se mueven al principio de su ámbito antes de que se ejecute el código. Esto significa que, en términos prácticos, puedes utilizar variables y funciones antes de que se declaren en tu código.
 El hoisting ocurre durante la fase de compilación del código JavaScript. Durante esta fase, el intérprete de JavaScript recorre el código para buscar todas las declaraciones de variables y funciones y las registra en la memoria. Luego, durante la fase de ejecución, el código se ejecuta según el flujo normal.
 Es importante tener en cuenta que solo las declaraciones de variables y funciones se ven afectadas por el hoisting, no las asignaciones de valores. Las asignaciones de valores permanecen en el lugar donde se encuentran en el flujo del código.
Veamos algunos ejemplos para ilustrar cómo funciona el hoisting: */

console.log(nombre); // undefined
var nombre = 'Juan';


//* Ejemplo 2: Hoisting de funciones

saludar(); // "Hola"

function saludar() {
  console.log("Hola");
}

// El hoisting puede ser una característica confusa y potencialmente propensa a errores en JavaScript. Se recomienda seguir buenas prácticas de programación y declarar todas las variables y funciones antes de utilizarlas,
//  para evitar cualquier comportamiento inesperado y mantener el código más legible.
//LET NO TIENE HOISTING