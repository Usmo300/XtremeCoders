'use strict';

// Requerimos mongoose para conectarnos a la base de datos.
const mongoose = require('mongoose');

// Creamos una constante para guardar la dirección de la DB.
const MONGODB = 'mongodb://localhost:27017/xtremecomics';


mongoose.connect(MONGODB, {     // Conectamos con la base de datos y le pasamos como parametro MONGODB.
    useNewUrlParser: true,      // Configuramos unos parametros para que en la terminal no nos salgan los !!!!!!DeprecationWarning!!!!!
    useUnifiedTopology: true,   // Estos parametros de !!!!!!DeprecationWarning!!!!!!
    useCreateIndex: true,       // no me los invento estan todos en la documentación de MOONGOSE.
    useFindAndModify: false     // https://mongoosejs.com/docs/deprecations.html
})


// Con esto nos dice que estamos conectados a la base de datos.
.then(db => console.log('Database is CONNECTED'))

//Capturamos el error en el caso de que haya error y le decimos que los imprima por consola.
.catch(err => console.log(err));