const BaseService = require("./base.service");
class AccesoService extends BaseService {
  constructor({ AccesoBusiness }) {
    super(AccesoBusiness);
    this._entityBusiness = AccesoBusiness;
  }

  async getAccessitems(){
    return await this._entityBusiness.getAccessitems();
  } 
  
  async getAccessComponent(id){
    return await this._entityBusiness.getAccessComponent(id);
  }  
}

module.exports = AccesoService;