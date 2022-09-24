const { Router } = require("express");
const productoController = require('../controllers/productos.js')
const routerProducto = Router();
const admin = require('../middleware/authorization.js')

routerProducto.get('/productos', (req, res) => {
  productoController.obtenerTodos(req, res)
})

routerProducto.get('/productos/:id', (req, res) => {
  productoController.obtenerPorId(req, res)

})

routerProducto.get('/productos/cat/:categoria', (req, res) => {
  productoController.obtenerPorCategoria(req, res)
})


routerProducto.post("/productos", admin, (req, res) => {
  productoController.agregarItem(req, res)
});

module.exports = routerProducto;
