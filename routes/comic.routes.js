'use strict';

// Requerimos "express" y lo desestructuramos para sacar  "Router".   
const { Router } = require('express');
// LLamamos a "Router" y lo metemos en la constante "router" para poder usarlo más adelante.
const router = Router();
// Requerimos "comic.controller" de la carpeta CONTROLLER y lo guardamos en una constante "comicController".
const comicController = require('../controller/comic.controller');

//Metodos C.R.U.D.

// CREATE

// Cuando pongamos en la barra de navegacion http://localhost:3000/books/add ejecute formCreateComic. 
router.get('/comics/add', comicController.formCreateComic);
// Utilizamos los datos enviados desde el formulario y ejecutamos createNewBook.
router.post('/comics/createComic', comicController.createNewComic);

router.get('/', comicController.mostrarRaiz);
router.get('/addform', comicController.formCreateComic);
router.get('/coleccion', comicController.mostrarColeccion);
router.get('/prestamo', comicController.mostrarPrestamo);
router.post('/menuprincipal', comicController.mostrarMenu);

// READ

// UPDATE

// DELETE

// Cuando pongamos en la barra de navegacion http://localhost:3000/books/delete/ y una ID de un libro ejecute deleteBook.
router.get('/comics/delete/:id', comicController.deleteComic);

module.exports = router;