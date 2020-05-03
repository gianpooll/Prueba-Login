"use strict"

const rutas = require("express").Router()

const notasController = require("../controllers/notas.controller")

// Devuelve la vista de listar notas
rutas.get("/notas", notasController.verNotas)

// Nos devuelve el formulario de crear Nota
rutas.get("/crear-nota", notasController.formCrearNota)

module.exports = rutas