const fs = require("fs");

const  crearArchivoTabla  = async (base) =>{

    try{

        console.log("=================");
        console.log(`Tabla del ${base}`);
        console.log("=================");
            
        let salida = "";
    
        for (let i = 0; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
    
        console.log(salida);
    
         fs.writeFileSync(`tabla-${base}.txt`,salida);
    
        return `Tabla del ${base} creada `;
    
    }catch(err){
        throw err;
    }

}

module.exports={
    crearArchivoTabla
}