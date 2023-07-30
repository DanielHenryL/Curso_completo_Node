const fs = require('fs')

const crearArchivo = async( base = 5 ) =>{
    console.log( "===============" );
    console.log( "  tabla de:",base );
    console.log( "===============" );
    let salida = '';

    for (let index = 1; index <= 10; index++) {
        salida += `${base} x ${ index } = ${ base * index }\n`
    }
    console.log( salida )

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