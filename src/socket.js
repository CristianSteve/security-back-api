const { Server : asIoServer } = require("socket.io");

class SocketUp {
    constructor(){
        this._socketIo = asIoServer;
        this._io = {};
    }

    async start(http){
        this.create(http);
        this._io.on("connection", (socket) => {
            console.log("Se conecto nuevo dispositivo: ", socket.id);
            socket.on('nuevo', (data) =>{
                console.log("Llego peticion a {nuevo}: ", data, socket.id);
                socket.broadcast.emit('nuevo', {
                    data, from: socket.id
                });
			})
		});
        this._io.on("disconnect", () => {
            console.log(socket.connected);
        });
    }

    async emit(nombre, valor){
        console.log("Emitiendo......")
        this._io.emit('nuevo', {servo : "server"});
    }

    async create(http){
        this._io = new this._socketIo(http,  
            {cors: {
                allowUpgrades: true,
                origins: '*:*'
		    },
            allowEIO3 : true,
            transports: [ 'polling', 'websocket' ],
        });
    }
}

module.exports = SocketUp;