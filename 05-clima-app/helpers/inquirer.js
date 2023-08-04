require('colors')
const inquirer = require('inquirer')


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que deseas hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Buscar ciudad`
            },
            {
                value: 2,
                name: `${'2.'.green} Historial`
            },
            {
                value: 0,
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
    // agregamos la opcion de cancelar 
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

const mostrarListadoChecklist = async( tareas = [] ) =>{
    // creamos el choices para presentar la tareas 
    const choices = tareas.map( ( tarea, index ) =>{
        const idx = `${ index + 1 }.`.green
        return{
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`,
            checked: tarea.completadoEn? true : false  ,
        }
    });

    // preparamos las preguntas     
    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices: choices,
        }
    ]
    const { ids } = await inquirer.prompt(preguntas);
    return ids;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist,
}