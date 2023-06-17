const readline = require("readline-sync")
const numero = readline.question('Dime un numero ');

if (numero > 0) {
    console.log('El numero es positivo')
} else if (numero < 0) {
    console.log('El numero es negativo')
} else { (numero === 0) 
    console.log('El numero es 0')
}