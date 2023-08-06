const http = require('http');
// ejemplo basico de crear un webserver solo con node
http.createServer( (req, res ) => {
    // respuesta por los header
    res.writeHead( 200, { 'Content-Type':'application/json'});
    
    // const persona = {
    //     id: 1,
    //     nombre: 'Fernando',
    // }
        
    // responde a la app
     res.write( 'Hola mundo' );
        
    // pone fin a la respuesta.
    // res.setHeader( 'Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead( 200, { 'Content-Type':'application/csv'});

    // res.write( 'id, nombre\n');
    // res.write( '1, Daniel\n');
    // res.write( '2, Juan\n');
    // res.write( '3, Cesar\n');
    // res.write( '4, Joel\n');

    res.end();
    
})
.listen( 8080 );

console.log( 'Escuchando el puerto', 8080 )