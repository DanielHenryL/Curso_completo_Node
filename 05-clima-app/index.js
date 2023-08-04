const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
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
                const lugar = await leerInput('Escriba la ciudad:');
                console.log( lugar );
                // buscar lugar

                // Seleccionar lugar 

                // clima

                // mostrar resultados
                console.log( '\nInformacion de la ciudad\n'.green );
                console.log( 'Ciudad:',  );
                console.log( 'Lat:', );
                console.log( 'Lng;', );
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