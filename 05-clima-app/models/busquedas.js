const axios = require('axios');

class Busquedas{

    historial = ['Tecnologia', 'madrid', 'San jose'];

    constructor(){

    }

    get paramsMapbox(){
        return {
            'access_token':'pk.eyJ1IjoiaGVucnlkYW5pZWwiLCJhIjoiY2xreDJleG93MHA1bzNrcGlwNDY1Mm54bCJ9.LD5PkPLAB9YTiEPTk9IuWA',
            'limit':5,
            'language':'es',
        }
    }
    async ciudad( lugar = '' ){
        try {
            // peticion
            const intance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            })
            const { data } = await intance.get();
            console.log( data );
            return [];
            
        } catch (error) {
            return [];
        }

        return []; // retironar los lugares
    }
}

module.exports = Busquedas;