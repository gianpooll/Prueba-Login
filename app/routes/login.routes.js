"use strict"
const rutas = require("express").Router()
const loginController = require("../controllers/login.controller")

rutas.get("/", loginController.login)

module.exports = rutas