const BaseBusiness = require("./base.business");
const mapper = require("automapper-js");
const { Area } = require("./models");

class AreaBusiness extends BaseBusiness {
  constructor({ AreaRepository }) {
    super(AreaRepository, Area);
    this._entityRepository = AreaRepository;
  }
}

module.exports = AreaBusiness;