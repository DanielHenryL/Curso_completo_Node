const axios = require('axios');

class Busquedas{

    historial = ['Tecnologia', 'madrid', 'San jose'];

    constructor(){

    }

    async ciudad( lugar = '' ){
        try {
            // peticion
            // console.log( 'Ciudad', lugar );
            const { data } = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Madrid%2C%20provincia%20de%20Madrid%2C%20Espa%C3%B1a.json?proximity=ip&language=es&access_token=pk.eyJ1IjoiaGVucnlkYW5pZWwiLCJhIjoiY2xreDJleG93MHA1bzNrcGlwNDY1Mm54bCJ9.LD5PkPLAB9YTiEPTk9IuWA');
            console.log( data );
            return [];
            
        } catch (error) {
            return [];
        }

        return []; // retironar los lugares
    }
}

module.exports = Busquedas;