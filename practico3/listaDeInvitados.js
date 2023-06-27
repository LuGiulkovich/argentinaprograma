//En este ejercicio, que guardaremos en un archivo listaDeInvitados.js, queremos que
//tomes una lista de nombres almacenados en un arreglo y los coloques en una lista de
//invitados. Pero no es tan fácil: no queremos dejar entrar a Jose y Sofia porque son
//codiciosos y groseros, ¡y siempre se comen toda la comida! Tenemos dos listas, una para
//admitir invitados y otra para rechazar invitados.
//La lista de personas es la siguiente: Jose, Maria, Juan, Andres, Lionel, Sofia, Leandro y
//Emilia.

let listaPersonas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let admitidos = [];
let rechazados = [];

//Específicamente, queremos que:
//● Escribas un bucle que itere desde 0 hasta la longitud del arreglo personas.
//Deberá comenzar con un inicializador de let i = 0; pero ¿qué condición de salida
//necesita?
//● Durante cada iteración del ciclo, verifique si el elemento del arreglo actual es
//igual a "Jose" o "Sofia" usando una declaración condicional:
//- Si es así, concatene el elemento al arreglo de rechazados.
//- Si no es así, concatene el elemento al arreglo de admitidos.

for (let i = 0; i < listaPersonas.length; i++) {
    if (listaPersonas[i] === "Jose") {
        rechazados.push(listaPersonas[i]);
    } else if (listaPersonas[i] === "Sofia") {
        rechazados.push(listaPersonas[i]);
    } else {
        admitidos.push(listaPersonas[i]);
    }
}

console.log(admitidos);
console.log(rechazados);


//● Finalmente, queremos que escribas dos bucles más; uno para imprimir la lista de
//invitados admitidos y otra para imprimir la lista de invitados rechazados:

//a. Para la lista de invitados admitidos deberás imprimir por consola un
//mensaje inicial que dirá: “La lista de invitados admitidos es:”, seguido por
//tantos párrafos como tenga el arreglo admitidos conteniendo los
//respectivos nombres de los invitados.

//"Aca quise hacer un poco mas ordenada la impesion por consola"

let adm = 'La lista de invitados admitidos es: '

for (let i = 0; i < admitidos.length; i++) {
    if (i === admitidos.length - 1) {
        adm = adm.slice(0, adm.length - 2)
        adm += ' y ' + admitidos[i] + '.';
        } else {
        adm += admitidos[i] + ', ';
        }
}

console.log(adm);

//b. Para la lista de invitados rechazados deberás imprimir por consola un
//mensaje inicial que dirá: "La lista de invitados rechazados es:”, seguido por
//tantos párrafos como tenga el arreglo rechazados conteniendo los
//respectivos nombres de los invitados.

let rec = 'La lista de invitados rechazados es: '

for (let i = 0; i < rechazados.length; i++) {
    if (i === rechazados.length - 1) {
        rec = rec.slice(0, rec.length - 2)
        rec += ' y ' + rechazados[i] + '.';
        } else {
        rec += rechazados[i] + ', ';
        }
}

console.log(rec);

//EXTRA:
//Después de completar con éxito las tareas anteriores, te quedarán dos
//listas de nombres, los admitidos y los rechazados pero estarán desordenados. El
//desafío es que puedas repetir el inciso anterior, pero esta vez imprimiendo los
//nombres de manera ordenada alfabéticamente. Deberás agregar la palabra
//“ordenada” posterior a la palabra lista, es decir, para el caso de los admitidos
//deberás imprimir: “La lista ordenada de invitados admitidos es:”.

admitidos.sort();
rechazados.sort();

console.log('La lista ordenada de invitados admitidos es:');
console.log(admitidos);


//"Aunque este arreglo si cae justo en orden la imprimo igual xD"
console.log('La lista ordenada de invitados rechazados es:');
console.log(rechazados);