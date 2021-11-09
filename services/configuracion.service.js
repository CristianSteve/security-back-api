const BaseService = require("./base.service");
class ConfiguracionService extends BaseService {
  constructor({ ConfiguracionBusiness }) {
    super(ConfiguracionBusiness);
    this._entityBusiness = ConfiguracionBusiness;
  }

  async getConfUser( id ) {
    return await this._entityBusiness.getConfUser( id );
  } 
  

}

module.exports = ConfiguracionService;