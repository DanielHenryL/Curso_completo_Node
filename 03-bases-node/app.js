const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();

// const base = 3;


crearArchivo( argv.b, argv.l )
    .then( nombreArchivo => console.log( nombreArchivo,'creada' ))
    .catch( err => console.log( err ))