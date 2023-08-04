const axios = require('axios');

class Busquedas{

    historial = ['Tecnologia', 'madrid', 'San jose'];

    constructor(){

    }

    async ciudad( lugar = '' ){
        // peticion
        console.log( lugar );

        return []; // retironar los lugares
    }
}

module.exports = Busquedas;