const BaseService = require("./base.service");
class TipoComponenteService extends BaseService {
  constructor({ TipoComponenteBusiness }) {
    super(TipoComponenteBusiness);
    this._entityBusiness = TipoComponenteBusiness;
  }

}

module.exports = TipoComponenteService;