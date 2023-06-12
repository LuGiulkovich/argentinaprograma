//a. Crea un arreglo vacío con el nombre de frutas.

let frutas = [];

//b. Agrega cinco frutas distintas al arreglo. Puede ser mediante el uso de
//variables o no.

frutas = ["Manzana", "Pera", "Anana", "Banana", "Melon"];
console.log(frutas);

//La consola me tira ['Manzana', 'Pera', 'Anana', 'Banana', 'Melon']

//c. Deberás obtener la última fruta agregada y guardarla en la variable ultima.

let ultima = frutas.slice(-1);

//Además deberás imprimir su valor por consola, respetando el
//siguiente formato
//“La ultima fruta agregada fue: [ultima]”

console.log("La ultima fruta agregada fue: %s", ultima);

//La consola me tira: La ultima frut agregada fue: Melon.

//d. Deberás obtener la primera fruta agregada y guardarla en la variable
//primera. 

let primera = frutas[0];

//Además deberás imprimir su valor por consola, respetando el
//siguiente formato
//“La primera fruta agregada fue: [primera]”

console.log("La primera fruta agregada fue: %s", primera);

//La consola me tira: La primera fruta agregada fue: Manzana.