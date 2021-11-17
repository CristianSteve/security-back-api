const nodemailer = require('nodemailer');
const template = require("./../templates/alert");

class Email {
    constructor({config}){
        this._config = config;
        this._transporter = nodemailer.createTransport({
            service: this._config.SERVICE_EMAIL,
            auth: {
                user: this._config.USER_EMAIL,
                pass: this._config.PASS_EMAIL
            }
        });
    }

    async sendEmail({...params}){
        const {fecha, hora} = this.getDate();
        console.log({...params})
        const mailOptions = {
            from: this._config.USER,
            to: params.email,
            subject: `${params.subject} - Windoor Security`,
            html : template[params.type]({...params, fecha, hora})
        };

        this._transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
        });
    }

    getDate(){
        const date = new Date();
        const minutes = date.getMinutes();
        const hors =  date.getHours();

        const fecha = date.getDate()  + "/"  + (date.getMonth() + 1) + "/" + date.getFullYear();
        const hora = (hors < 10 ? '0' + hors : hors) + ":" + (minutes < 10 ? '0' + minutes : minutes);
        return {fecha, hora};
    }
}

module.exports = Email;