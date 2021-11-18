const BaseBusiness = require("./base.business");
const mapper = require("automapper-js");
const { CodeUser } = require("./models");

class CodeUserBusiness extends BaseBusiness {
  constructor({ CodeUserRepository }) {
    super(CodeUserRepository, CodeUser);
    this._entityRepository = CodeUserRepository;
  }
}

module.exports = CodeUserBusiness;