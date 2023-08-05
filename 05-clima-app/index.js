require('dotenv').config();
const { leerInput, inquirerMenu, pausa, listadoLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");
require('colors')

const main = async() =>{
    let opt = 1;
    
    const busquedas = new Busquedas();
    
    do {
        opt = await inquirerMenu();
        
        switch ( opt ) {
            case 1:
                // pedir lugar al usuario
                const ciudad = await leerInput('Escriba la ciudad:');
                // buscar lugar
                const lugares = await busquedas.ciudad( ciudad );
                // Seleccionar lugar 
                const id = await listadoLugares( lugares );
                const lugarSelec = lugares.find( lugar => lugar.id === id)
                // clima

                // mostrar resultados
                console.log( '\nInformacion de la ciudad\n'.green );
                console.log( 'Ciudad:', lugarSelec.nombre );
                console.log( 'Lat:', lugarSelec.lat );
                console.log( 'Lng;', lugarSelec.lng );
                console.log( 'Temperatura:', );
                console.log( 'Minima:', );
                console.log( 'Maxima:', )

                break;
            case 2:
                console.log( 'Mostrar historial' );
                break;
        }

        if ( opt !== 0 ) await pausa();

    } while ( opt !== 0 );

}

main();