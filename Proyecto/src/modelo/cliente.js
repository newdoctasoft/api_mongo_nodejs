const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const clienteSchema = new Schema({

    nombre: String,
    apellido: String,
    email: String,
    autos: [{
        type: Schema.Types.ObjectId,
        ref:'auto'
    }]

});

module.exports =mongoose.model('Cliente', clienteSchema);

 