const container = require("./src/container");

const aplication = container.resolve("app");

const db = container.resolve("db");
const ioSocket = container.resolve("socketIo");

aplication
	.start()
	.then(async (http) => {
		ioSocket.start(http);
		await db.sequelize.sync();
	})
	.catch((e) => {
	console.log("Error subiendo servidor", e);
	process.exit();
})