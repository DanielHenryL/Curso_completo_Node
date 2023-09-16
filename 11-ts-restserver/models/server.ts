import dotenv from 'dotenv';
dotenv.config();
import express, {Application} from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';

interface Path {
    usuarios:string
}

class Server{

    private app:Application;
    private port:string;
    private apiPath:Path;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.apiPath = {
            usuarios: '/api/usuarios'  
        }
        // middleware de la aplicacion
        this.middleware();
        // Rutas de mi aplicacion
        this.routes();
    }
    middleware(){
        //Cors
        this.app.use( cors() );
        // Lectura del body
        this.app.use( express.json() );
        // Carpeta publica
        this.app.use( express.static('public'));
    }
    routes(){
        this.app.use( this.apiPath.usuarios, userRoutes )
    }



    listen(){
        this.app.listen( this.port, () => {
            console.log( `Servidor corriendo en el puerto ${ this.port }` );
        })
    }
}

export default Server