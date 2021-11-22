const mapper = require("automapper-js");
const { CodeUserDto } = require("../dtos");

class CodeUserController {
  constructor({ CodeUserService, Email }) {
    this._codeUserService = CodeUserService;
    this._email = Email;
    this._mapper = mapper;
  }

  async validateCode(req, res){
    let idCode = req.params.code;
    const code = await this._codeUserService.validateCode(idCode);
    const status = code?.codeError ? code.status : 200;

    return res.status(status).json({data : code})
  }

  async codeUser(req, res){
    let create = req.body;
    const emailEmisor = res.user.email;
    //code
    const codigo = Math.floor((Math.random() * (9999 - 1000 + 1)) + 1000);
    create.codigo = codigo;
    create.emailEmisor = emailEmisor;
    console.table(create)

    const code = await this._codeUserService.getCode(create);

    //send email
    const conf = {code : codigo, email : code.emailReceptor, subject : "Register", type : "newUser"}
    await this._email.sendEmail(conf);
    return res.json({data : code})
  }
} 

module.exports = CodeUserController;
