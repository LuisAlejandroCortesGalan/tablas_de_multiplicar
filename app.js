//MODULOS QUE VAMOS A UTILIZAR

const fs = require('node:fs');
const path = require('node:path');
const { config } = require('node:process');
const pc = require('picocolors');


//Prueba del picocolors
// console.log(pc.bgBlue("Esto debería ser amarillo"));

// console.clear();


// Verificar si hay 2 argumentos en la ejecicion de js

if (process.argv.length == 2) {

    let menu = `Este programa muestra la tabla de multiplicar del numero que elijas \n `
    menu += `Te lo mostrara en el idioma que escojas de los siguientes: \n`
    menu += `cat - esp - fra - eng \n`
    menu += `Ademas lo grabara en un fichero \n`
    menu += `Ejemplo de uso : ${pc.green("node:app.js 3 cat")} \n`
    console.log("mostraremos el menu", menu);
    process.exit(0);
} 

// FALTA VERIFICAR QUE ESTEN LOS DOS ARGUMENTOS BIEN INTRODUCIDOS
// VERIFICAR EL ORDEN DE LOS ARGUMENTOS
// VERIFICAR QUE EL NUMERO SEA MAYOR DE 0
// VERIFICAR QUE EL IDIOMA ESTE EN LA LISTA


// OBTENER EL NUMERO OPERADOR Y EL IDIOMA
const operador = process.argv[2];
const lang = process.argv[3];

// OBTENEMOS EL FICHERO DE IDIOMAS
const rutaJson = path.join("config", "languages.json"); 
const jsonLang = fs.readFileSync(rutaJson, "utf8");
const langObj = JSON.parse(jsonLang);

// console.log("quiero ver que es", langObj[lang]);


const title = langObj[lang] + " " + operador;


// DEFINIR CABECERA
let header = ("================================================\n")
header += (langObj[lang] + " " + `${operador} \n`)
header += ("================================================ \n")

console.log("aqui muestro el header: ", pc.green(header));

//ESTABLECEMOS UN LIMITE
const numLimit = 10;
let tabla = "";

for (let i = 1; i < numLimit; i++) {
    tabla += `\t${operador} x ${i} = ${operador * i} \n` ;
}

console.log("aqui muestro la tabla:", tabla);


const newTitle = title.split(" ").join("_");
const rutaCarpetas = path.join("txt", lang);


// VERIFICAR SI LA RUTA SE EXISTE


if (!fs.existsSync(rutaCarpetas)) {
    console.log(`La Ruta ${rutaCarpetas} no existía`);
    fs.mkdirSync(rutaCarpetas, {recursive: true});
}


const rutaFichero = path.join(rutaCarpetas, newTitle+".txt");
fs.writeFileSync(rutaFichero, header + tabla, "utf-8");
