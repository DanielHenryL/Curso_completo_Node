
// Ejemplo basico de un callbacks
// setTimeout(() => {
//     console.log( 'Hola mundo' )
// }, 1000);


// primer mandamos el callback como un parametro normal con cualquier nombre 
const getUsuarioById = ( id, callbacks ) =>{
    const usuario = {
        id,
        nombre: 'daniel'
    }
    setTimeout(() => {
        callbacks( usuario )
    }, 1500);
}

// mandamos el callback como argumento y un paramtro 'user'
getUsuarioById( 10, ( user ) => {
    console.log( user.id );
    console.log( user.nombre.toUpperCase() );
});

