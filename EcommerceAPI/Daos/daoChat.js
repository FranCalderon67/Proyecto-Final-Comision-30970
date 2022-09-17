const Contenedor = require("../contenedor/contenerdorMongo.js");
const mongoDbUri = require("../config/mongoConfig.js");

const chatDao = new Contenedor(mongoDbUri, "proyecto", "chats");

module.exports = chatDao;
