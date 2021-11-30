const BaseBusiness = require("./base.business");
const mapper = require("automapper-js");
const { Acceso } = require("./models");

class AccesoBusiness extends BaseBusiness {
  constructor({ AccesoRepository }) {
    super(AccesoRepository, Acceso);
    this._entityRepository = AccesoRepository;
  }

  async getAccessitems(){
    return await this._entityRepository.getAccessitems();
  }
}

module.exports = AccesoBusiness;