const mapper = require("automapper-js");
const { UserDto } = require("../dtos");

class UserController {
  constructor({ UserService }) {
    this._userService = UserService;
    this._mapper = mapper;
  }

  async getAll(req, res){
    let user = await this._userService.getAll();
    user = await this._mapper(UserDto, user);
    return res.json({data : user})
  }
} 

module.exports = UserController;
