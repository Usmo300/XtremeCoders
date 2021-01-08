require("../conexion/conexion");
const product = require("../modelos/product");

const buscaProduct = async () =>{
    await product.find({});
    console.log(product);
}

buscaProduct();