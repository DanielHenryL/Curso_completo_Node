require('dotenv').config();
const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // middlewares
        this.middlewares();
        // rutas de mi aplicacion
        this.routes();
    }
    middlewares() {
        // directorio público
        this.app.use( express.static('public') );
        
    }
    routes() {
        this.app.get('/api', ( req, res ) => {
            res.send('Hola Mundo')
        });
    }

    listen() {
        this.app.listen( this.port , () => {
            console.log( `aplicacion corriendo en el puerto:${ this.port }` )
        });
    }

}


module.exports = Server;