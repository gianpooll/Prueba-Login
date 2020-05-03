"use strict"
const express = require("express")
const path = require("path")
const morgan = require("morgan")

// Importamos las rutas de la app
const loginRutas = require("./routes/login.routes")

// Aplicamos el objeto de la aplicacion
const app = express()

// Middlewares
app.use(express.urlencoded( { extended: false } ))
app.use(express.json())
app.use(morgan("dev"))

//configuraciones de la aplicacion
app.set("port", process.env.PORT || 4000)
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

// Configuracion de archivos estaticos
app.use(express.static(path.join(__dirname, "public")))

// Usamos las rutas importadas
app.use(loginRutas)

// Exportamos el objeto de la aplicación
module.exports = app