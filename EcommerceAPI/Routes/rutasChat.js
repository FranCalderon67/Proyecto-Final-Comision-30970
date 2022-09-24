const { Router } = require("express");
const chat = require("../Daos/daoChat.js");
const routerChat = Router();

routerChat.get('/mensajes', async (req, res) => {
    res.json(await chat.obtenerTodos())
})

routerChat.post("/mensajes", async (req, res) => {
    const mensaje = {
        author: {
            email: req.body.username,
            nombre: req.body.firstname,
            apellido: req.body.lastname,
            edad: req.body.age,
            alias: req.body.alias,
            avatar: req.body.avatar,
        },
        text: req.body.text,
        fyh: new Date().toLocaleString()
    };
    console.log(mensaje)
    if (mensaje.username === "" || mensaje.text === "") {
        res.send(alert('Algunos campos del producto estan vacios'))
    } else {
        await chat.agregarItem(mensaje);
        res.redirect("http://localhost:3000/");
    }
});



module.exports = routerChat;