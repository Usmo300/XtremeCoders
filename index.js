'use strict';

// Requerimos las librerias que instalamos inicialmente: "express", "express-handlebars" y "morgan".
const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');

// INICIALIZACIONES
// LLamamos a express() y lo guardamos en una constante llamada app.
const app = express();
// Requerimos el archivo database.js.
require('./database');

// SETTINGS
// Configuramos el puerto.
const port = 3000;
// Configuramos el motor de plantillas que en este caso es HANDLEBARS.
app.engine('hbs', exphbs({
    partialsDir: __dirname + '/views/partials/', // Configuramos donde esta la carpeta partials.
    layoutsDir: __dirname + '/views/layouts/', // Configuramos donde esta la carpeta layouts.
    extname: '.hbs' // Le decimos que la extension de los archivos de handlebar es ".HBS".
}));
// Expecificamos cual es que motor de plantillas que configuramos anteriormente.
app.set('view engine', 'hbs');

//MIDDLEWARES
//Usamos morgan y le decimos que use su opcion DEV. https://www.npmjs.com/package/morgan
app.use(morgan('dev'));
// https://expressjs.com/es/api.html
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ROUTES    
// Usamos a la vez que requerimos el archivo de comic.routes.js 
app.use(require('./routes/comic.routes'));


// Le decimos que tiene que escuchar por el puerto que configuramos anteriormente.
app.listen(port, console.log(`Escuchando por el ${port}`));

// Aqui le decimos al servidor donde estan los archivos estaticos y cual es su ruta.
app.use(express.static(__dirname + '/public/'));
// app.use('/css',express.static(__dirname, 'public/css'));