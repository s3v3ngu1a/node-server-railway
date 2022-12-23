require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
var hbs = require('hbs');

// TO-DO:
// vistas de generic y elements con handlebars

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
// middlewares

// servir contenido estatico

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',  {
        nombre: 'Sergio',
        titulo: 'Curso de Node'
    })
  });

app.get('/generic', (req, res) => {
  res.render('generic',  {
    nombre: 'Sergio',
    titulo: 'Curso de Node'
})
  });

app.get('/elements', (req, res) => {
  res.render('elements',  {
    nombre: 'Sergio',
    titulo: 'Curso de Node'
})
});
  app.listen(port)