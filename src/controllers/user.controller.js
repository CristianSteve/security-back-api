const mapper = require("automapper-js");
const { UserDto } = require("../dtos");

class UserController {
  constructor({ UserService, Email }) {
    this._userService = UserService;
    this._mapper = mapper;
    this._email = Email;
  }

  async getAll(req, res){
    let user = await this._userService.getAll();
    user = await this._mapper(UserDto, user);
    return res.json({data : user})
  }

  async codeUser(req, res){
    console.log("user entro")
    let create = req.body;
    const emailEmisor = res.user.email;
    //code
    const codigo = Math.floor((Math.random() * (9999 - 1000 + 1)) + 1000);
    create.codido = codigo;
    create.emailEmisor = emailEmisor;

    const code = await this._userService.getCode(create);

    //send email
    const conf = {code : codigo, email : code.emailReceptor, subject : "Register", type : "newUser"}
    await this._email.sendEmail(conf);
    return res.json({data : code})
  }
} 

module.exports = UserController;
