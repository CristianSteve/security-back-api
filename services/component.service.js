const BaseService = require("./base.service");
class ComponentService extends BaseService {
  constructor({ ComponentBusiness }) {
    super(ComponentBusiness);
    this._entityBusiness = ComponentBusiness;
  }
}

module.exports = ComponentService;