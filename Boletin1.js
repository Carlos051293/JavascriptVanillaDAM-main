// 1. Escribe un comentario en una línea
// Esto es un comentario de una línea

console.log("Javascript");

// 2. Escribe un comentario en varias líneas
/*
   Esto es un comentario
   en varias líneas
*/

// 3. Declara variables con valores asociados a todos los tipos de datos y imprímelos en la consola
let nombre = "messi";           // string
let numero = 10;                // number
let booleano = true;            // boolean
let indefinido;                 // undefined
let nulo = null;                // null
let objeto = { equipo: "PSG" }; // object
let simbolo = Symbol("id");     // symbol

console.log(nombre, numero, booleano, indefinido, nulo, objeto, simbolo);

// 4. Modifica los valores de las variables y vuelve a imprimirlos
nombre = "ronaldo";
numero = 7;
console.log(nombre, numero);

// 5. Declara constantes con valores asociados a todos los tipos de datos y muéstralos
const jugador = "neymar";
const edad = 31;
const activo = false;
const objeto2 = { equipo: "Al-Hilal" };

console.log(jugador, edad, activo, objeto2);

// 6. Operadores aritméticos
let suma = 5 + 3;
let resta = 10 - 4;
let multiplicacion = 6 * 2;
let division = 20 / 5;
let modulo = 10 % 3;

console.log(suma, resta, multiplicacion, division, modulo);

// 7. Operadores de asignación
let x = 10;
x += 5;
let y = 20;
y -= 4;
let z = 3;
z *= 2;

console.log(x, y, z);

// 8. Operadores de comparación
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 == "5"); // true (comparación débil)
console.log(5 === "5"); // false (comparación estricta)
console.log(10 != 7);  // true

// 9. Operadores lógicos
let andLogico = true && false;
let orLogico = true || false;

console.log(andLogico, orLogico);

// 10. Operador ternario
let edad2 = 18;
let permiso = (edad2 >= 18) ? "Mayor de edad" : "Menor de edad";
console.log(permiso);

// 11. Concatenación de cadenas
let cadena1 = "Hola ";
let cadena2 = "Mundo";
console.log(cadena1 + cadena2);

// 12. Transformar a mayúsculas
let texto = "javascript";
console.log(texto.toUpperCase());

// 13. Longitud de una cadena
console.log("Cristiano".length);

// 14. Reemplazar espacio por guion
let frase = "Hola mundo";
console.log(frase.replace(" ", "-"));

// 15. Comprobar si contiene una palabra
console.log("Me gusta programar en JS".includes("programar"));

// 17. Otro método de String (substring)
let cadena3 = "Barcelona";
console.log(cadena3.substring(0, 3)); // "Bar"

// 18. Imprime tu nombre si una variable tiene valor
let miNombre = "Adrián";
if (miNombre) {
  console.log(miNombre);
}

// 19. Acceso permitido
let usuario = "admin";
let contrasena = "1234";
if (usuario === "admin" && contrasena === "1234") {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
}

// 20. Estación del año
let mes = 10;
if (mes >= 3 && mes <= 5) console.log("Primavera");
else if (mes >= 6 && mes <= 8) console.log("Verano");
else if (mes >= 9 && mes <= 11) console.log("Otoño");
else console.log("Invierno");

// 21. Switch con estaciones
switch (mes) {
  case 3: case 4: case 5:
    console.log("Primavera");
    break;
  case 6: case 7: case 8:
    console.log("Verano");
    break;
  case 9: case 10: case 11:
    console.log("Otoño");
    break;
  default:
    console.log("Invierno");
}

// 22. Listado con 5 elementos
let lista = ["uno", "dos", "tres", "cuatro", "cinco"];
console.log(lista);

// 23. Añadir al principio y al final
lista.unshift("cero");
lista.push("seis");
console.log(lista);

// 24. Eliminar último elemento
lista.pop();
console.log(lista);

// 25. Set con 5 elementos
let conjunto = new Set([1, 2, 3, 4, 5]);
console.log(conjunto);

// 26. Mapa con número como clave y mes como valor
let mapa = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"]
]);
console.log(mapa);

// 27. Bucle del 1 al 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 28. Contar vocales de un string
let palabra = "programacion";
let contador = 0;
for (let letra of palabra) {
  if ("aeiou".includes(letra)) contador++;
}
console.log("Vocales:", contador);

// 29. Invertir una cadena
let cadena4 = "hola";
let invertida = "";
for (let i = cadena4.length - 1; i >= 0; i--) {
  invertida += cadena4[i];
}
console.log(invertida);

// 30. Función que sume dos números
function sumar(a, b) {
  return a + b;
}
console.log(sumar(5, 7));

// 31. Función que devuelva solo letras mayúsculas de un array
function extraerMayusculas(arr) {
  return arr.filter(str => str === str.toUpperCase());
}
console.log(extraerMayusculas(["HOLA", "mundo", "JS", "code"]));

// 32. Función que invierte un string
function invertirCadena(str) {
  return str.split("").reverse().join("");
}
console.log(invertirCadena("javascript"));