const BaseBusiness = require("./base.business");
const mapper = require("automapper-js");
const { CodeUser } = require("./models");

class CodeUserBusiness extends BaseBusiness {
  constructor({ CodeUserRepository }) {
    super(CodeUserRepository, CodeUser);
    this._entityRepository = CodeUserRepository;
  }

  async getCode(entity){
    const codeUser = mapper(CodeUser, entity);
    const code =  await this._entityRepository.create(codeUser);
    return mapper(CodeUser, code.toJSON());
  }

  async validateCode(codigo){
    const code =  await this._entityRepository.getCode(codigo);
    if (!code) return {status: "409", codeError : "CODE010", description : "Codigo del cliente no existe"};
      return mapper(CodeUser, code.toJSON());
  }
}

module.exports = CodeUserBusiness;