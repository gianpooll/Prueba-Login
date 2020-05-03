"use strict"

const { Schema, model } = require("mongoose")
const bcrypt = require("bcrypt")

const UsuarioEsquema = new Schema({
	nombre: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	contrasena: {
		type: String,
		required: true
	},
	estado: {
		type: Boolean,
		default: true
	}
}, {
	timestamps: true
})

UsuarioEsquema.methods.EncriptaContra = async contrasena => {
	const sal = await bcrypt.genSalt(8)
	return await bcrypt.hash(contrasena, sal)

}

UsuarioEsquema.methods.CamparaContra = async function (contrasena) {
	return await bcrypt.compare(contrasena, this.contrasena)
}

module.exports = model("Usuario", UsuarioEsquema)