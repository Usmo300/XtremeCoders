// Requerimos "mongoose" y lo desestructuramos {} para sacar "Schema" y "model". 
const { Schema, model } = require('mongoose');

// Creamos un "new Schema" y lo guardamos en una constante bookSchema.
const comicSchema = new Schema({ //Aqui dentro escribimos los parametros que va a tener nuestro libro en la base de datos.
    categoria: {
        type: String,
        required: true
    },
    coleccion: {
        type: String,
        required: true
    },
    rutafoto: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },

    fecha: {
        type: Date,
        required: true
    },
    numerotomo: {
        type: Number,
        required: true
    },
    prestado: {
        type: Boolean,
        required: true
    },
    resumen: {
        type: String,
        required: true
    }
});

// Al escribir 'books' en "module.exports = model('Book', bookSchema, 'books')" le
// decimos a la base de datos que la coleccion se llame 'books'.
module.exports = model('Comic', comicSchema, 'comics');