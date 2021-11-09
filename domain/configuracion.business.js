const BaseBusiness = require("./base.business");
const mapper = require("automapper-js");
const { Configuracion } = require("./models");

class ConfiguracionBusiness extends BaseBusiness {
  constructor({ ConfiguracionRepository }) {
    super(ConfiguracionRepository, Configuracion);
    this._entityRepository = ConfiguracionRepository;
  }

  async getConfUser(id) {
    const confUser = await this._entityRepository.getConfUser(id);
    if (!confUser) return {status: "409", codeError : "CONF010", description : "Configuracion del cliente no existe"};
    return mapper(Configuracion, confUser.toJSON());
  }
}

module.exports = ConfiguracionBusiness;