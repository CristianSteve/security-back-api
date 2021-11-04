const BaseService = require("./base.service");
class UserService extends BaseService {
  constructor({ UserBusiness }) {
    super(UserBusiness);
    this._entityBusiness = UserBusiness;
  }

}

module.exports = UserService;