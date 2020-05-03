"use strict"
const app = require("./servidor")

const BaseDatos = require("./database").conexion()

async function main () {
	app.listen(app.get("port"))
	console.log(`Servidor ejecutandose en el puerto: ${app.get("port")}`)
	BaseDatos
}

main()
