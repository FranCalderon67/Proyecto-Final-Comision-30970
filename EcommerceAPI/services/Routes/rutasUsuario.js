const { Router } = require("express");
const path = require("path");
const passport = require("../config/passport.js");
const routerUsuario = Router();
const upload = require('../config/multer.js')

routerUsuario.use(passport.initialize());
// routerUsuario.use(passport.session());

routerUsuario.get("/", (req, res) => {
  res.redirect("/home");
});

routerUsuario.get("/login", (req, res) => {
  res.render(path.join(process.cwd(), "./public/hbsViews/login.hbs"));
});

routerUsuario.post("/login", passport.authenticate("login", { failureRedirect: "/failedLogin", successRedirect: "/home" }));

routerUsuario.get("/signup", (req, res) => {
  res.render(path.join(process.cwd(), "./public/hbsViews/signup.hbs"));
});

routerUsuario.post("/signup", upload.single('avatar'), passport.authenticate("signup", { failureRedirect: "/failedSignup", successRedirect: "/login" }));



routerUsuario.get("/failedLogin", (req, res) => {
  res.render(path.join(process.cwd(), "./public/hbsViews/errorLogin.hbs"));
});

routerUsuario.get("/failedSignup", (req, res) => {
  res.render(path.join(process.cwd(), "./public/hbsViews/errorSignup.hbs"));
});

routerUsuario.get("/logout", (req, res) => {
  const nombre = req.session?.email;
  if (nombre) {
    req.session.destroy((err) => {
      if (!err) {
        res.render(path.join(process.cwd(), "./public/hbsViews/logout.hbs"), { nombre: nombre });
      } else {
        res.redirect("/");
      }
    });
  } else {
    res.redirect("/");
  }
});

routerUsuario.get("/user", (req, res) => {

  if (req.session?.passport) {

    res.send(req.session.passport.user.username.nombre)
  } else {
    res.send("invitado")
  }

});

routerUsuario.get("/userdata", (req, res) => {

  if (req.session?.passport) {
    res.send(req.session.passport.user.username)
  } else {
    res.send("invitado")
  }

});

routerUsuario.get("/foto", (req, res) => {

  if (req.session?.passport) {
    res.render(req.session.passport.user.username.imgPerfil)
  } else {
    res.send("No Foto")
  }
});


routerUsuario.get('/perfil', (req, res) => {
  const usuario = req.session.passport.user.username
  res.render('perfil', { usuario })
})

module.exports = routerUsuario;
