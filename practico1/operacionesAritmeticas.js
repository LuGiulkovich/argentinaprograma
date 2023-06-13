//Crea cuatro variables que contengan valores numéricos.

let var1 = 5;
let var2 =6;
let var3 = 14;
let var4 = 18;

//Suma las dos primeras variables y guarda el resultado en otra variable.

let suma12 = var1 + var2;
console.log(suma12);

//La cosola me tira 11

//Resta la cuarta variable de la tercera 
//y almacena el resultado en otra variable.

let resta43 = var4 - var3;
console.log(resta43);

//La consola me tira 4

//Multiplica los resultados de los dos últimos pasos juntos, almacenando el
//resultado en una variable llamada resultadoFinal. El producto debe ser 44.
//Si no lo es, deberá ajustar algunos de los valores de entrada iniciales.

let resultadoFinal = suma12 * resta43
console.log(resultadoFinal);

//La consola me tira 44

//Escribe un cálculo que verifique si resultadoFinal es un número par.
//Almacene el resultado en una variable llamada esPar.

let esPar = (resultadoFinal % 2) === 0;

//Imprima por consola un mensaje con el siguiente formato:
//“Mis variables iniciales fueron: [var1], [var2], [var3] y [var4]. 

console.log("Mis variables iniciales fueron: %i, %i, %i y %i.", var1, var2, var3, var4);

//La consola me tira Mis variables inicales fueron: 5, 6, 14 y 18.

//La respuesta a verificar si el resultado final es par es: [esPar]”

console.log('La respuesta a verificar si el resultado final es par es: ' + esPar);

//La consola me tira: La respuesta a verificar si el resultado final es par es: true
