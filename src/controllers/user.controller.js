const mapper = require("automapper-js");
const { UserDto, UserId } = require("../dtos");

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

  async getUser(req, res){
    const { id } = req.params;
    let user = await this._userService.get(id);
    user = mapper(UserId, user);
    return res.json({data : user})
  }

  async updateUser(req, res){
    const { id } = req.params;
    const body = req.body;
    let user = await this._userService.update(id, body);
    user = mapper(UserId, user);
    return res.json({data : user})
  }

  async createUser(req, res){
    let newUser = req.body; 
    const dtoUser = await this._mapper(UserDto, newUser);
    let user = await this._userService.create(dtoUser);
    user = await this._mapper(UserDto, user);
    res.json({data : user})
  }

/*   async codeUser(req, res){
    let create = req.body;
    const emailEmisor = res.user.email;
    //code
    const codigo = Math.floor((Math.random() * (9999 - 1000 + 1)) + 1000);
    create.codigo = codigo;
    create.emailEmisor = emailEmisor;
    console.table(create)

    const code = await this._userService.getCode(create);

    //send email
    const conf = {code : codigo, email : code.emailReceptor, subject : "Register", type : "newUser"}
    await this._email.sendEmail(conf);
    return res.json({data : code})
  } */
} 

module.exports = UserController;
