const express = require('express')
const app = express()
const port = 8080;
app.get('/', function (req, res) {
  res.send('Home Page')
})

app.get('/hola-mundo', ( req, res ) => {
    res.send('Hola mundo')
})

app.get('*', ( req, res ) => {
    res.send('404 | Page not found')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })