
//CREAMOS CONSTANTE QUE IMPORTA MONGOOSE
const {Schema} = require ('mongoose');

//CREAMOS NUEVO PRODUCTO CON LAS CARACTERISTICAS {SCHEMA}
const product = new Schema({
    categoria: String,
    coleccion: String,
    rutafoto: String,
    genero: String,
    autor: String,
    fecha: Date,
    numerotomo: Number,
    prestado: Boolean,
    resumen: String,
    
});

//AQUI PREGUNTAR QUE ES LO QUE REALMENTE EXPORTA, LA CONSTANTE PRODUCT O EL ARCHIVO JS
module.exports = model(product);