const BaseService = require("./base.service");
class AreaService extends BaseService {
  constructor({ AreaBusiness }) {
    super(AreaBusiness);
    this._entityBusiness = AreaBusiness;
  }

}

module.exports = AreaService;