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

  async getAccessComponent(id){
    return await this._entityRepository.getAccessComponent(id);
  }
}

module.exports = AccesoBusiness;