//Defina una variable de tipo objeto que lleve el nombre persona, y que
//contenga las variables nombre, apellido y edad del ejercicio anterior con
//sus respectivos valores.

let persona = {nombre : "Luciano", apellido : "Giulkovich", edad : 21};

//Imprime por consola un mensaje que respete el siguiente formato:
//“Mi objeto persona es el siguiente: [persona]”

console.log("Mi objeto persona es el siguiente: " + JSON.stringify(persona) );

//La consola me tira
//Mi objeto persona es el siguiente: {"nombre":"Luciano","apellido":"Giulkovich","edad":21}
