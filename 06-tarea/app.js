require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;

// handlebars
app.set('view engine', 'hbs');

hbs.registerPartials( __dirname + '/views/partials', ( err ) => {
    console.log( err );
})

app.use( express.static('public'));

app.get('/', ( req, res) => {
    res.render('home', {
        nombre:'Daniel Lagunas',
        titulo:'Aprendiendo node'
    });
});



app.get('/generic', ( req, res) => {
    res.render('generic', {
        nombre:'Daniel Lagunas',
        titulo:'Aprendiendo node'
    });
});
app.get('/elements', ( req, res) => {
    res.render('elements', {
        nombre:'Daniel Lagunas',
        titulo:'Aprendiendo node'
    });
});


app.listen( port, () => {
    console.log( `Escuchando desde el puerto ${ port }` )
})