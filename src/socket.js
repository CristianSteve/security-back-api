const { Server : asIoServer } = require("socket.io");
const nodemailer = require('nodemailer');
const template = require("../src/templates/alert");

class SocketUp {
    constructor({server}){
        this._socketIo = asIoServer;
        this._server = server._http; 
        this._io = {};
        this._transporter = nodemailer.createTransport({service: 'gmail',
            auth: {
                user: 'notifikaciones123@gmail.com',
                pass: '123B0rr4r'
            }
        });;
    }

    async start(http){
        this.create(http);
        this._io.on("connection", (socket) => {
            console.log("Se conecto nuevo dispositivo: ", socket.id);
            socket.on('nuevo', (data) =>{
                console.log("Llego peticion a {nuevo}: ", data, socket.id);
                //this.sendEmail();
                socket.broadcast.emit('nuevo', {
                    data, from: socket.id
                });
			})
		});
        this._io.on("disconnect", () => {
            console.log(socket.connected);
          });
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

    async sendEmail(userAlert, date, time, msg){
        
        const mailOptions = {
            from: 'notifikaciones123@gmail.com',
            to: 'catelady13@gmail.com, ccristiansteve14@gmail.com',
            subject: 'Alertas Windoor Security',
            html : template.alert("Cristian", "Jue, 02 de Novi 2021","10:00","Area privada empresa")
          };

          this._transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email enviado: ' + info.response);
            }
          });
    }
}

module.exports = SocketUp;