const fs = require('node:fs');

const languages = {
    "cat": "Taula de multiplicar del ",
    "esp": "Tabla de multiplicar del",
    "fra": "Taule de multiplication de",
    "eng": "Multiplication table of",
}

// FORMA ASINCRONA
const langJson = JSON.stringify(languages);

fs.writeFile('languages.json', langJson, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});