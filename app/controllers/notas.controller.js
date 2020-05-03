"use strict"

// Nos devuelve la vista de listar las notas
function verNotas (req, res) {
res.render("./notas/verNotas")
}

// Nos devuelve el formulario para crear Notas
function formCrearNota (req, res) {
	res.render("./notas/crearNota")
}

module.exports = {
	verNotas,
	formCrearNota,
}