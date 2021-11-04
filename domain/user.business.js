const BaseBusiness = require("./base.business");
const mapper = require("automapper-js");
const { User } = require("./models");

class UserBusiness extends BaseBusiness {
  constructor({ UserRepository }) {
    super(UserRepository, User);
    this._entityRepository = UserRepository;
  }
}

module.exports = UserBusiness;