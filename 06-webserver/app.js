const express = require('express')
const app = express()
const port = 8080;

// Servir contenido estatico  , NOTA: las rutas staticas tiene prioridad con otras rutas; esto quiere
// decir que buscara todas las rutas em la carpeta public luego las otras rutas que se hayan definido.
app.use( express.static('public'))



app.get('/hola-mundo', ( req, res ) => {
    res.send('Hola mundo');
})

app.get('*', ( req, res ) => {
    res.sendFile(__dirname + '/public/404.html')  // le expecificas un archivo
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })