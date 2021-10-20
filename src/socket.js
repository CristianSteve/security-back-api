const { Server : asIoServer } = require("socket.io");

class SocketUp {
    constructor({server}){
        this._socketIo = asIoServer;
        this._server = server._http; 
        this._io = {};
    }

    async start(http){
        this.create(http);
        this._io.on("connection", (socket) => {
			socket.on('conectado', () =>{
				console.log("ok");
			})
		});
    }

    async create(http){
        this._io = new this._socketIo(http,  {cors: {
			origin: "http://localhost:3000",
			methods: ["GET", "POST"]
		}});
    }
}

module.exports = SocketUp;