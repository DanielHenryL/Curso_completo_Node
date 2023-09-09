require('dotenv').config();
const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {}
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        // middlewares
        this.middlewares();
        // rutas de mi aplicacion
        this.routes();
        // Sockets
        this.sockets();
    }

    middlewares() {
        // Cors
        this.app.use( cors() );
        // directorio público
        this.app.use( express.static('public') );
    }

    routes() {
        // this.app.use( this.paths.auth , require('../routes/auth' ));
    }

    sockets(){
        this.io.on('connection', socket => {
            console.log( 'cliente conectado', socket.id );

            socket.on('disconnect', ()=>{
                console.log( 'Cliente desconectado', socket.id );
            })
        })
    }
    listen() {
        this.server.listen( this.port , () => {
            console.log( `aplicacion corriendo en el puerto:${ this.port }` )
        });
    }

}

module.exports = Server;