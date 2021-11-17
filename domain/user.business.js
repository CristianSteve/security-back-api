const BaseBusiness = require("./base.business");
const mapper = require("automapper-js");
const { UserAuth, CodeUser } = require("./models");

class UserBusiness extends BaseBusiness {
  constructor({ config, UserRepository, CodeUserRepository, Auth }) {
    super(UserRepository, UserAuth);
    this._entityRepository = UserRepository;
    this.__entityCodeRepository = CodeUserRepository;
    this._config = config;
    this._Auth = Auth;
  }

  async getToken(username, password) {
    const entities = await this._entityRepository.authUser(username, password);
    if (!entities) return {status: "409", codeError : "ATH001", description : "Credenciales no validos"};
    const data = mapper(UserAuth, entities.toJSON());
    this._Auth.createToken(data.username, data.email, data.nombre).then(e=> data.token = e)
    return data;
  }

  async getCode(entity){
    const codeUser = mapper(CodeUser, entity);
    console.table(codeUser)

    const code =  await this.__entityCodeRepository.create(codeUser);
    return mapper(CodeUser, code.toJSON());
  }
}

module.exports = UserBusiness;