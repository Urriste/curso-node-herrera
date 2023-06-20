
const {crearArchivoTabla} = require("./helpers/multiplicar")
const argv = require("yargs").argv;

console.clear();

/* 
const [,,arg3 = "base=1"] = process.argv;
const [,base = 0] = arg3.split("=")
 */

console.log(argv);

/* crearArchivoTabla(base)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err)); */