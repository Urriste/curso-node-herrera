
const {crearArchivoTabla} = require("./helpers/multiplicar");
const argv = require("./config/yargs");


console.clear();

crearArchivoTabla(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));




/* 
const [,,arg3 = "base=1"] = process.argv;
const [,base = 0] = arg3.split("=")
 */
