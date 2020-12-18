
//CREAMOS CONSTANTE QUE IMPORTA MONGOOSE
const {Schema, model} = require ('mongoose');

//CREAMOS NUEVO PRODUCTO CON LAS CARACTERISTICAS {SCHEMA}
const productSchema = new Schema({
    categoria: String,
    coleccion: String,
    rutafoto: Map,
    genero: String,
    autor: String,
    fecha: Date,
    numerotomo: Number,
    prestado: Boolean,
    resumen: String,
    
});

//EXPORTAMOS EL SCHEMA Y LO PASAMOS A JSON.
module.exports = model("product", productSchema);