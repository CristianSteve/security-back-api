const BaseService = require("./base.service");
class UserService extends BaseService {
  constructor({ UserBusiness }) {
    super(UserBusiness);
    this._entityBusiness = UserBusiness;
  }

  async authUser(username, password) {
    const entities = await this._entityBusiness.getToken(username, password);
    return entities;
  }
}

module.exports = UserService;