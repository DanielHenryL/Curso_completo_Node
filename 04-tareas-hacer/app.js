require('colors')

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');



const main = async() =>{
    let opt = '';

    // crear instancia de tareas
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if( tareasDB ){
        tareas.cargarTareasFromArray(tareasDB);
    }

    do{
        // Imprimir el menu
        opt = await inquirerMenu();
        switch ( opt ) {
            case '1':
                // pedir descripcion al usuario
                const desc = await leerInput( 'Descripcion: ');
                // crear la tarea 
                tareas.crearTareas(desc);
            break;
            case '2':
                // imprime las tareas
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarCompletadasPendientes();
                break;
            case '4':
                tareas.listarCompletadasPendientes( false );
                break;
            case '6':
                const id =await listadoTareasBorrar( tareas.listadoArr )
                console.log( id )
                // tareas.borrarTarea( id )
                break;

        }
        // guardar las tareas en bd
        guardarDB( tareas.listadoArr )


        await pausa();
    }while( opt !== '0' );
}
main();