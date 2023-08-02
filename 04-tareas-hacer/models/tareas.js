require('colors')

const Tarea = require("./tarea");

class Tareas {
    _listado = {};

    get listadoArr(){

        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado;
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea( id = ''){
        if ( this._listado [id] ) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray( tareas = []){
        tareas.forEach( tarea =>{
            this._listado[tarea.id] = tarea;
        })
    }

    crearTareas( desc='' ){
        const tarea = new Tarea( desc )
        this._listado[tarea.id] = tarea
    }

    listadoCompleto(){
        console.log(); // para el salto de linea
        // _listado es un objeto y poco manejable por eso se usa la propiedad listadoArr
        this.listadoArr.forEach( ( { desc,completadoEn }, index) => {
            const idx = `${ index + 1 }.`.green
            console.log(`${ idx} ${ desc } :: ${ completadoEn ? 'Completada'.green:'Pendiente'.red }`)
        } );
    }

    listarCompletadasPendientes( completadas = true ){
        console.log(); // para el salto de linea
        const completados = (completadas) 
                            ? this.listadoArr.filter( tarea => tarea.completadoEn) 
                            : this.listadoArr.filter( tarea => !tarea.completadoEn) 
        completados.forEach( ( { desc, completadoEn }, index) => {
            const idx = `${ index + 1 }.`.green
            console.log(`${ idx} ${ desc } :: ${ completadoEn ? completadoEn:'Pendiente'.red }`)
        } );
    }
}

module.exports = Tareas;