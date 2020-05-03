"use strict";

const mongoose = require("mongoose");

async function conexion() {
  try {
    await mongoose.connect("mongodb://localhost/prueba-login", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
		})
		console.log("Conexion establecida con la base de datos..")
  }catch(err){
		console.log(`Error al conectarse con la base de datos: ${err}`)
	}
}

module.exports = {
	conexion
}
