//Pasos a seguir:
//1. Crea un nuevo archivo JavaScript con nombre piedraPapelTijeras.js.

//2. Crea una función llamada obtenerJugadaComputadora que generará un número
//aleatorio entre 0 y 2 para representar las opciones:
//- 0 para "piedra",
//- 1 para "papel" y
//- 2 para "tijeras"

const readlineSync = require('readline-sync');

//Ayuda: revisar en el teórico cuál es la función de la 
//librería Math que genera un número random.

function obtenerJugadaComputadora(minimo, maximo) {
    let numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}

//3. Crea una función llamada obtenerJugadaUsuario que solicitará al usuario ingresar su
//elección a través de la consola.
//Ayuda: revisa en el práctico de condicionales, como solicitar al usuario que ingrese un
//valor por consola.

let opciones = ["Piedra", "Papel", "Tijera"];
let piedra = 0;
let papel = 1;
let tijeras = 2;
let miJugada;

function obtenerJugadaUsuario() { 
    console.log("► JUGUEMOS ◄");
    do {
        miJugada = +(readlineSync.question("Que eliges? \nPiedra: 0\nPapel: 1\nTijeras: 2\n Elijo "));
        if (miJugada >= 3 || miJugada <= 0) {
        console.clear();
        console.log('Caracter no Valido');
        }
    } 
    while (miJugada >= 3 || miJugada < 0);
    
    return miJugada;
}


//4. Crea una función llamada determinarGanador que tomará como parámetros las jugadas
//de la computadora y del usuario. Implementa las reglas del juego para determinar el
//ganador y retorna el resultado.

let estado = ["Empate!", "Perdiste :(", "Ganaste UwU"];
let result = [];

function determinarGanador(miJugada, laJugada) {
    if (miJugada == piedra) {
        if (laJugada == piedra) {
            result.push(estado[0]);
        } else if (laJugada == papel) {
            result.push(estado[1]);
        } else if (laJugada == tijeras) {
            result.push(estado[2]);
        }
    } else if (miJugada == papel) {
            if (laJugada == piedra) {
                result.push(estado[2]);
            } else if (laJugada == papel) {
                result.push(estado[0]);
            } else if (laJugada == tijeras) {
                result.push(estado[1]);
            }
    } else if (miJugada == tijeras) {
            if (laJugada == piedra) {
                result.push(estado[1]);
            } else if (laJugada == papel) {
                result.push(estado[2]);
            } else if (laJugada == tijeras) {
                result.push(estado[0]);
            }
    
        }
    return result;
}

//5. Llama a las funciones en el orden adecuado para ejecutar el juego:
//a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una
//variable.

let laJugada = obtenerJugadaComputadora(0, 2);

//b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.

let usuario = obtenerJugadaUsuario();

//c) Invoca la función determinarGanador pasando como argumentos las jugadas de
//la computadora y del usuario. Almacena el resultado en una variable.

let detWinner = determinarGanador(miJugada, laJugada);

//6. Imprime por pantalla el resultado del juego utilizando la función console.log(). El mensaje
//debe indicar la jugada de la computadora, la jugada del usuario y el resultado del juego
//(quién ganó o si fue un empate). Se debe respetar el siguiente formato dependiendo del
//resultado:

function detalles() {
    console.clear();
    console.log('► Resultado de la partida ◄')
//La computadora eligio: [jugadaComputador].
    console.log("❏  La computadora eligio: " + opciones[laJugada]);
//El usuario eligio: [jugadaUsuario].
    console.log("❏  El usuario eligio: " + opciones[usuario]);
//El resultado fue: [Empate | Gana la computadora | Gana el usuario].
    console.log("❏  El resultado fue: " + detWinner);
}

detalles();

//NOTA: no es necesario imprimir todo el mensaje en una sola línea, se puede imprimir en
//tres párrafos.
//EXTRA 1: Definir constantes para las distintas jugadas, es decir, piedra, papel y tijera y adaptar el
//código para su correcta utilización.
//EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el
//juego, es decir:
//● Una jugada: gana el ganador de esa única jugada.
//● Dos jugadas: gana quien gana ambas jugadas, o puede haber un empate en caso de que
//el usuario gane una jugada y la computadora la otra.
//● Mejor de 3: quien gane 3 o 2 jugadas será el ganador, etc.
