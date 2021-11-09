const BaseBusiness = require("./base.business");
const mapper = require("automapper-js");
const jwt = require('jsonwebtoken');
const { UserAuth } = require("./models");

class UserBusiness extends BaseBusiness {
  constructor({ config, UserRepository, Auth }) {
    super(UserRepository, UserAuth);
    this._entityRepository = UserRepository;
    this._config = config;
    this._Auth = Auth;
  }

  async getToken(username, password) {
    const entities = await this._entityRepository.authUser(username, password);
    if (!entities) return {status: "409", codeError : "ATH001", description : "Credenciales no validos"};
    const data = mapper(UserAuth, entities.toJSON());
    this._Auth.createToken(data.username).then(e=> data.token = e)
    return data;
  }
}

module.exports = UserBusiness;