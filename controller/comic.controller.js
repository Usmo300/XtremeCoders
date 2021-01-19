'use strict';

// Requerimos "book.js" que se encuentra en la carpeta "MODELS" y lo guardamos en una constante "Comic" para poder usarlo más adelante. 
const Comic = require('../models/comic');

// Creamos un Objeto vacio para meterle los parametros más adelante ((((((EJEMPLO: createNewComic))))))
const comicController = {}

// Llamamos a la constante "comicController" y creamos "FormCreateComic"
comicController.formCreateComic = (req, res) => { // Creamos una funcion flecha (=>).
    res.render('comics/createComic') // Le decimos que nos renderice 'comics/createComic' 
        // que esta ubicado en VIEWS / COMICS / createComic.hbs
};
// Llamamos a la constante "comicController" y creamos "createNewComic"
comicController.createNewComic = async(req, res) => { // En este caso creamos una funcion asíncrona "async"
    const { categoria, coleccion, rutafoto, genero, autor, fecha, numerotomo, prestado, resumen } = req.body; // Metemos en una const lo que enviamos desde el formulario
    const newComic = new Comic({ categoria, coleccion, rutafoto, genero, autor, fecha, numerotomo, prestado, resumen }); // Cogemos la info del form y le decimos que son los parametros para crear el Book
    await newComic.save(); // await va ligado al "async" y con el ".save()" le decimos que lo guarde en la DB.
    res.send('Comic creado') // Le decimos que nos rendireccione a 'comics/createComic' 
};
// Llamamos a la constante "comicController" y creamos "deleteComic"
comicController.deleteBook = async(req, res) => { // En este caso creamos una funcion asíncrona "async"
    await Comic.findByIdAndDelete(req.params.id) //  Usamos un metodo de mongo para buscar ID y borrar, le decimos que busque por un id https://docs.mongodb.com/manual/reference/method/js-collection/
    res.send('Comic Borrado') //Le decimos que nos muestre en pantalla 'Comic borrado'
};

module.exports = comicController;