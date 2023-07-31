const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la tabla de multiplicar de la base ?'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .check( (argv, options) => {
                    if( isNaN( argv.b ) ) {
                        throw 'La base debe ser un numero entero';
                    }
                    return true;
                })
                .argv;

module.exports = argv;