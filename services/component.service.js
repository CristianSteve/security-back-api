const BaseService = require("./base.service");
class ComponentService extends BaseService {
  constructor({ ComponentBusiness }) {
    super(ComponentBusiness);
    this._entityBusiness = ComponentBusiness;
  }

  async updateStatus(id, entity){
    return await this._entityBusiness.update(id, entity);
  }

  async getItemAccess(idAccess){
    return await this._entityBusiness.getItemAccess(idAccess);
  }
}

module.exports = ComponentService;