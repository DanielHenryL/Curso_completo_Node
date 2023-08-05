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
                if ( id === 0) {
                    continue;
                }
                const lugarSelec = lugares.find( lugar => lugar.id === id);
                // grabar en bd 
                busquedas.agregarHistorial( lugarSelec.nombre );
                // clima
                const clima = await busquedas.climaLugar( lugarSelec.lat , lugarSelec.lng );

                // mostrar resultados
                console.clear()
                console.log( '\nInformacion de la ciudad\n'.green );
                console.log( 'Ciudad:', lugarSelec.nombre.green );
                console.log( 'Lat:', lugarSelec.lat );
                console.log( 'Lng;', lugarSelec.lng );
                console.log( 'Temperatura:', clima.temp );
                console.log( 'Minima:', clima.min);
                console.log( 'Maxima:', clima.max );
                console.log( 'Como está el clima:', clima.desc.green );

                break;
            case 2:
                busquedas.historial.forEach( ( lugar, index ) => {
                    const idx = `${ index + 1 }.`.green;
                    console.log( `${ idx } ${ lugar } ` )
                });
                break;
        }

        if ( opt !== 0 ) await pausa();

    } while ( opt !== 0 );

}

main();