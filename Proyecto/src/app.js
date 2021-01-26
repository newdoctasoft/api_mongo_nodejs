const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');




//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());






// conexion BASE DATO 
mongoose.connect('mongodb://localhost/apiMongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((db) => { console.log('CONEXION EXITOSA') })
    .catch((error) => { console.log('NO SE PUDO CONECTAR') });



//configuracion puerto
app.set('puerto', process.env.PORT || 3000);




// RUTAS
const clienteRutas=require('./rutas/clienteRuta');
app.use('/cliente',clienteRutas);



// levantar servidor
app.listen(app.get('puerto'), () => {

    console.log('SERVIDOR LEVANTADO PUERTO', app.get('puerto'));
});