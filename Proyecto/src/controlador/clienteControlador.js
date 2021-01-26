const Cliente = require('../modelo/cliente');
const Auto = require('../modelo/auto');

module.exports = {

    listar: async (req, res, next) => {

        const clientes = await Cliente.find({});
        res.status(200).json(clientes);
        //throw new Error('error creado');

    },
    insertar: async (req, res, next) => {

        const nuevoCliente = new Cliente(req.body);
        const clienteInsertado = await nuevoCliente.save();
        res.status(200).json(clienteInsertado);
    },
    buscar: async (req, res, next) => {
        const { clienteId } = req.params;
        const clienteEncontrado = await (await Cliente.findById(clienteId));
        res.status(200).json(clienteEncontrado);
    },
    buscarEditar: async (req, res, next) => {
        const { clienteId } = req.params;
        const nuevoCliente = req.body;
        const clienteBD = await Cliente.findByIdAndUpdate(clienteId, nuevoCliente);
        res.status(200).json({ success: true });
    },
    editar: async (req, res, next) => {
        const { clienteId } = req.params;
        const nuevoCliente = req.body;
        const clienteBD = await Cliente.findByIdAndUpdate(clienteId, nuevoCliente);
        res.status(200).json({ success: true });
    },
    eliminar: async (req, res, next) => {
        const { clienteId } = req.params;
        await Cliente.findByIdAndRemove(clienteId);
        res.status(200).json({ success: true });
    },  
    insertarAuto: async (req, res, next) => {
        const { clienteId } = req.params;
        console.log(clienteId);
        const nuevoAuto = new Auto(req.body);
        console.log(nuevoAuto);
        const clienteEncontrado = await Cliente.findById(clienteId);
        nuevoAuto.cliente = clienteEncontrado;
        await nuevoAuto.save();
        clienteEncontrado.autos.push(nuevoAuto);
        await clienteEncontrado.save();
        res.status(201).json(nuevoAuto);

    },
    listarAutos1: async (req, res, next) => {
        const { clienteId } = req.params;
        const clienteEncontrado= await Cliente.findById(clienteId);
        //const user= await User.findById(userId).populated('car');
        res.status(200).json(clienteEncontrado);
    },

    listarAutos: async (req, res, next) => {
        const { clienteId } = req.params;
        const clienteEncontrado=await   Cliente.findById(clienteId);
         
        res.status(200).json(autos);
    }

   
}


