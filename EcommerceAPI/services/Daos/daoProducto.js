const Contenedor = require("../contenedor/contenerdorMongo.js");
const mongoDbUri = require("../config/mongoConfig.js");

const productoDao = new Contenedor(mongoDbUri, "proyecto", "productos");

module.exports = productoDao;
