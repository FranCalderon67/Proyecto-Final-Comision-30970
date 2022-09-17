const Contenedor = require("../contenedor/contenerdorMongo.js");
const mongoDbUri = require("../config/mongoConfig.js");

const usuarioDao = new Contenedor(mongoDbUri, "proyecto", "usuarios");

module.exports = usuarioDao;
