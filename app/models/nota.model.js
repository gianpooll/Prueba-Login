"use strict"

const { Schema, model } = require("mongoose")

const NotaEsquema = new Schema({
	titulo: {
		type: String,
		required: true
	},
	descripcion: {
		type: String,
		required: true
	}
}, {
	timestamps: true
})

modelu.exports = model('Nota', NotaEsquema)