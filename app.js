const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Rob',
    titulo: 'Curso Node Js',
  });
});
app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Rob',
    titulo: 'Curso Node Js',
  });
});
app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Rob',
    titulo: 'Curso Node Js',
  });
});

app.get('*', (req, res) => res.sendFile(__dirname + '/public/404.html'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
