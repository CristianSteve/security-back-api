const BaseBusiness = require("./base.business");
const mapper = require("automapper-js");
const { TipoComponente } = require("./models");

class TipoComponenteBusiness extends BaseBusiness {
  constructor({ TipoComponenteRepository }) {
    super(TipoComponenteRepository, TipoComponente);
    this._entityRepository = TipoComponenteRepository;
  }
}

module.exports = TipoComponenteBusiness;