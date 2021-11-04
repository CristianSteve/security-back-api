const BaseBusiness = require("./base.business");
const mapper = require("automapper-js");
const { Configuracion } = require("./models");

class ConfiguracionBusiness extends BaseBusiness {
  constructor({ ConfiguracionRepository }) {
    super(ConfiguracionRepository, Configuracion);
    this._entityRepository = ConfiguracionRepository;
  }
}

module.exports = ConfiguracionBusiness;