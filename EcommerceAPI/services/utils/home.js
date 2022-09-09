const { Router } = require("express");

// const path = require("path");
const productosWebRouter = Router();

productosWebRouter.get("/home", (req, res) => {
  res.render("./public/index.html", { nombre: req.session.email });
});

module.exports = productosWebRouter;
