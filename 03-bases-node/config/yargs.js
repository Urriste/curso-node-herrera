const argv = require("yargs")
//Options: Agregar flags al comando node app para pasar parametros especificos. Ej, node app --b=5 --l=true. Le paso como base el numero 5 y le digo que me los liste
        .options({
            "b":{
                alias:"base",
                type:"number",
                demandOption:true,
                description:"Define la base de la multiplicación"
            },
            "l":{
                alias:"listar",
                type:"boolean",
                demandOption:false,
                default:false,
                description:"Define si se mostrará en consola el resultado de las multiplicaciones"
            },
            "h":{
                alias:"hasta",
                type:"number",
                demandOption:false,
                default:10,
                description:"Define hasta que valor se generaran las multiplicaciones"
            }
        })
        //Check: Sirve para agregar validaciones a lo que manda por consola el usuario :)
        .check((argv,options)=>{
            if(isNaN(argv.b)){
                throw "La base tiene que ser un número"
            }
            return true
        })
        .argv;


module.exports = argv;