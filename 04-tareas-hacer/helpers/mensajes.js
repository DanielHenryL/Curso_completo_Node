require('colors')


const mostrarMenu = ( ) =>{
    // se usa el new Promise para retornar el valor del opt, no podemos usar el async en estos casos
    return new Promise( ( resolve, reject )=>{
        console.clear();
        console.log( '===================================='.green );
        console.log( '       Seleccione una opcion'.green );
        console.log( '====================================\n'.green );
    
        console.log( `${'1.'.green } Crear terea` )
        console.log( `${'2.'.green } Listar tareas` )
        console.log( `${'3.'.green } Listar tareas completadas` )
        console.log( `${'4.'.green } Listar tareas pendientes` )
        console.log( `${'5.'.green } Completar tarea(s)` )
        console.log( `${'6.'.green } Borrar terea` )
        console.log( `${'0.'.green } Salir\n` )
        
        // recibir informacion del usuario
        const readline = require('readline').createInterface({
            input: process.stdin,    // recibir informacion del usuario
            output: process.stdout   // mostrarle informacion al usuario 
        })
    
        // hacer pregunta al usuario y el callback para retornar la informacion
        readline.question('Seleccione una opcion: ', ( opt )=>{
            readline.close();
            resolve( opt );
        })
    })
        
 }
    


const pausa = () =>{

    return new Promise( ( resolve, reject ) =>{
        // recibir informacion del usuario
        const readline = require('readline').createInterface({
            input: process.stdin,    // recibir informacion del usuario
            output: process.stdout   // mostrarle informacion al usuario 
        })
    
        // hacer pregunta al usuario y el callback para retornar la informacion
        readline.question(`\nPresione ${ 'Enter'.green } para continuar\n`, ( opt )=>{
            readline.close();
            resolve()
        })
    })
}

module.exports = {
    mostrarMenu,
    pausa
}