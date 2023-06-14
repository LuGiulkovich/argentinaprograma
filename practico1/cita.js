//Deberás crear un programa en el archivo cita.js. En esta
//tarea, se te proporcionan dos variables, cita y substring, que contienen dos
//cadenas. Nos gustaría que:

let cita = ("Tres tristes tigres comen trigo en un trigal");
let substring = ("tigres comen trigo");

//a. Recuperes la longitud de la cita y la guardes en una variable llamada
//tamañoDeCita.

let tamañoDeCita = cita.length;

//Deberás imprimir por consola un mensaje con el
//siguiente formato:
//“El tamaño de la cita es: [tamañoCita]”

console.log('El tamaño de cita es: ' + tamañoDeCita);

//La consola me tira: El tamaño de cita es: 44

//b. Busques la posición del índice donde aparece substring en cita, y
//almacenes ese valor en una variable llamada indice. 

let indice = cita.indexOf(substring);

//Deberás imprimir por consola un mensaje con el siguiente formato:
//“El indice del substring es: [indice]”

console.log('El indice del sustring es: ' + indice);

//La posicion del indice donde aprece substring en cita es 13.

//c. Usa una combinación de las variables que tienes y las
//propiedades/métodos de cadena disponibles para recortar la cita original
//a "Tres tristes tigres comen trigo", y la guardes en una variable
//llamada citaRevisada.

let citaRevisada = cita.slice(0, 31);

//Por último, para verificar que el valor de
//citaRevisada es correcto, deberás imprimirla por consola.

console.log(citaRevisada);

//Los valores iniciales de cita y substring son los siguientes:
//● cita = “Tres tristes tigres comen trigo en un trigal”
//● substring = “tigres comen trigo”