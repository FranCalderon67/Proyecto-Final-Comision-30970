const producto = require('../Daos/daoProducto.js')

const obtenerTodos = async (res) => {
    return res.json(await producto.obtenerTodos())
}



module.exports = {
    obtenerTodos
}