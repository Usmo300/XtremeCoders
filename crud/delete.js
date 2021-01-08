require("../conexion/conexion");
const product = require("../modelos/product");

const borraProduct = async () =>{
    const producto = await product.findByIdAndDelete('5ff82a64e4302d4770969a77');
}

borraProduct();