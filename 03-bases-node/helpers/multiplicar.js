const fs = require('fs')

const crearArchivo = async( base = 5, listar ) =>{
    
    let salida = '';

    for (let index = 1; index <= 10; index++) {
        salida += `${base} x ${ index } = ${ base * index }\n`
    }
    
    if (listar) {
        console.log( "===============" );
        console.log( "  tabla de:",base );
        console.log( "===============" );
        console.log( salida )
    }

    try {
        fs.writeFileSync(`tabla-${ base }.txt`, salida)
        return `tabla-${ base }`;
        
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}