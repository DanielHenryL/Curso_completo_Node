require('colors')
const inquirer = require('inquirer')


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que deseas hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tarea`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            },
        ]
    }
]

// Presenta el menu y pide una opcion
const inquirerMenu = async( ) =>{
    console.clear();

    console.log( '===================================='.green );
    console.log( '       Seleccione una opcion'.blue );
    console.log( '====================================\n'.green );

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;

}
// pausa el menu 
const pausa = async() =>{
    const question = [
        {
            type:'input',
            name: 'enter',
            message: `Presione ${ 'ENTER'.green } para continuar`
        }
    ]
    console.log( '\n' )
    await inquirer.prompt(question);
}
// pide al usuario un 'message'
const leerInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: message,
            validate( value ){
                if( value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ]
    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listadoTareasBorrar = async( tareas = [] ) =>{
    // creamos el choices para presentar la tareas 
    const choices = tareas.map( ( tarea, index ) =>{
        const idx = `${ index + 1 }.`.green
        return{
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`
        }
    });
    choices.unshift({
        value:'0',
        name:'0. '.green + 'Cancelar',
    })
    // preparamos las preguntas     
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices: choices,
        }
    ]
    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async( message ) =>{
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message: message,
        }
    ]
    const { ok } = await inquirer.prompt(question);
    return ok;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar
}