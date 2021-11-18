const mapper = require("automapper-js");
const { CodeUserDto } = require("../dtos");

class CodeUserController {
  constructor({ CodeUserService }) {
    this._codeUser = CodeUserService;
    this._mapper = mapper;
  }

  async getAll(req, res){
  }
} 

module.exports = CodeUserController;
