//Escriba un programa que solicite al usuario ingresar un número entero del 1 al
//12 representando los meses de un año; donde 1 es enero, 2 es febrero, 3 es marzo, etc.

const readline = require('readline-sync')
const num = readline.question('Elige un numero del 1 al 12: ');

//Deberá guardar esta información en alguna de las estructuras ya
//vistas, es decir, 1 = enero, 2 = febrero, 3 = marzo, etc para luego ser utilizada en
//el texto a imprimir. 

let mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let cantidadDeDias = [28, 30, 31];

//Su programa deberá ser guardado en un archivo meses.js y
//consistirá de imprimir por consola la cantidad de días que tiene el mes
//ingresado bajo el siguiente formato:
//'La cantidad de dias del mes de [mes] es [cantidadDeDias]'

if (num == 1) {
    console.log('La cantidad de dias del mes de ' + mes[0] + ' es de ' + cantidadDeDias[2] + '.');
} else if (num == 2) {
    console.log('La cantidad de dias del mes de ' + mes[1] + ' es de ' + cantidadDeDias[0] + '.');
} else if (num == 3) {
    console.log('La cantidad de dias del mes de ' + mes[2] + ' es de ' + cantidadDeDias[2] + '.');
} else if (num == 4) {
    console.log('La cantidad de dias del mes de ' + mes[3] + ' es de ' + cantidadDeDias[1] + '.');
} else if (num == 5) {
    console.log('La cantidad de dias del mes de ' + mes[4] + ' es de ' + cantidadDeDias[2] + '.');
} else if (num == 6) {
    console.log('La cantidad de dias del mes de ' + mes[5] + ' es de ' + cantidadDeDias[1] + '.');
} else if (num == 7) {
    console.log('La cantidad de dias del mes de ' + mes[6] + ' es de ' + cantidadDeDias[2] + '.');
} else if (num == 8) {
    console.log('La cantidad de dias del mes de ' + mes[7] + ' es de ' + cantidadDeDias[2] + '.');
} else if (num == 9) {
    console.log('La cantidad de dias del mes de ' + mes[8] + ' es de ' + cantidadDeDias[1] + '.');
} else if (num == 10) {
    console.log('La cantidad de dias del mes de ' + mes[9] + ' es de ' + cantidadDeDias[2] + '.');
} else if (num == 11) {
    console.log('La cantidad de dias del mes de ' + mes[10] + ' es de ' + cantidadDeDias[1] + '.');
} else if (num == 12) {
    console.log('La cantidad de dias del mes de ' + mes[11] + ' es de ' + cantidadDeDias[2] + '.');
}

//Por ejemplo: si el número ingresado es 1, su programa imprimirá “La cantidad
//de dias del mes de enero es 31”.

//NOTAS:
//● Nota que el valor de [mes] no es el numero ingresado si no su
//correspondiente almacenado en la estructura de datos elegida.
//● Para el alcance de este ejercicio, podemos pensar que febrero siempre
//tiene 28 días.
