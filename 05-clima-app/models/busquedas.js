const fs = require('fs')
const axios = require('axios');

class Busquedas{

    historial = [];
    dbPath = './db/database.json';
    constructor(){

    }

    get paramsMapbox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit':5,
            'language':'es',
        }
    }
    async ciudad( lugar = '' ){
        try {
            // peticion
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            })
            const { data } = await instance.get();
            return data.features.map( lugar => {
                return {
                    id: lugar.id,
                    nombre: lugar.place_name,
                    lng: lugar.center[0],
                    lat: lugar.center[1],
                }
            })
            
        } catch (error) {
            return [];
        }

        
    }
    get paramsWeather(){
        return {
            'appid':'4eb0750bf70f7ed5ec45fcf40adcd13e',
            'units':'metric',
            'lang':'es'
        }
    }
    async climaLugar( lat, lon){
        try {
            const instance = axios.create({
                baseURL:`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }`,
                params: this.paramsWeather
            })
            const { data } = await instance.get();
            const { weather, main } = data;
            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }
        } catch (error) {
            console.log( error )
        }
    }

    agregarHistorial( lugar = ''){
        if( !this.historial.includes( lugar.toLocaleLowerCase() )){
            this.historial.unshift( lugar.toLocaleLowerCase() );
        }
        this.guardarDB();
    }

    guardarDB(){
        const payload = {
            historial: this.historial,
        }
        fs.writeFileSync( this.dbPath, JSON.stringify( payload ) )
    }

    leerDB(){
        
    }



}

module.exports = Busquedas;