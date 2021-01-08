require("../conexion/conexion");
const product = require("../modelos/product");

const alterarProduct = async () =>{
    const producto = await product.findOneAndUpdate({nombre: 'raton'},{nombre: 'alfombrilla'},{new: true});
    console.log(producto);
}

alterarProduct();