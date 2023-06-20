const fs = require("fs");
const colors = require("colors/safe")

const  crearArchivoTabla  = async (base,listar,hasta) =>{

    try{

        if(listar){
            
            console.log("=================");
            console.log(`Tabla del ${base}`);
            console.log("=================");
        
        }
            
        let salida = "";
    
        for (let i = 0; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        
        if(listar){
            console.log(salida);
        }
         
    
         fs.writeFileSync(`tabla-${base}.txt`,salida);
    
        return colors.rainbow(`Tabla del ${base} creada`);
    
    }catch(err){
        throw err;
    }

}

module.exports={
    crearArchivoTabla
}