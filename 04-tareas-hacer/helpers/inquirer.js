require('colors')
const inquirer = require('inquirer')


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que deseas hacer?',
        choices: ['opt1', 'opt2', 'opt3']
    }
]

const inquirerMenu = async( ) =>{
    console.clear();

    console.clear();
    console.log( '===================================='.green );
    console.log( '       Seleccione una opcion'.green );
    console.log( '====================================\n'.green );

    await inquirer.prompt(preguntas)
    return opt

}

module.exports = {
    inquirerMenu
}