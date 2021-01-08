require("../conexion/conexion");
const product = require("../modelos/product");

const variosProduct = async () =>{
    const comic = new product({
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
    await comic.save();
}

variosProduct();