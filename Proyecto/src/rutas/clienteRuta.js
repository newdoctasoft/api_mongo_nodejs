const expressRouter = require('express-promise-router');
const ruta = expressRouter();

const { listar,
    insertar,
    buscar, 
    editar,
    eliminar,
    insertarAuto,
    listarAutos  
 } = require('../controlador/clienteControlador');

ruta.get('/listar', listar);
ruta.post('/insertar', insertar);
ruta.get('/buscar/:clienteId', buscar);
ruta.put('/editar/:clienteId', editar);
ruta.delete('/eliminar/:clienteId', eliminar);




ruta.post('/insertarAuto/:clienteId', insertarAuto);
ruta.get('/mostrarAutos/:clienteId', listarAutos);
 

module.exports = ruta;