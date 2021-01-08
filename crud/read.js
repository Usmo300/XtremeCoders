require("../conexion/conexion");
const product = require("../modelos/product");

const buscaProduct = async () =>{
    const producto = await product.find({nombre:'microfono'});
    console.log(producto);
}

buscaProduct();