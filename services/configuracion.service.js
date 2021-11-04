const BaseService = require("./base.service");
class ConfiguracionService extends BaseService {
  constructor({ ConfiguracionBusiness }) {
    super(ConfiguracionBusiness);
    this._entityBusiness = ConfiguracionBusiness;
  }

}

module.exports = ConfiguracionService;