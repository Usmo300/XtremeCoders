require('./conexion/conexion');

const Product = require('./modelos/product');
const comic = new Product({

    categoria: "Los Vengadores",
    coleccion: "Civil War",
    rutafoto: "",
    genero: "Acción",
    autor: "Perico",
    fecha: 2015-05-29,
    numerotomo: 1,
    prestado: false,
    resumen: "Los superheroes se pegan. Fin."

});


console.log(comic);