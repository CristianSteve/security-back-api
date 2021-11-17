const BaseService = require("./base.service");
class UserService extends BaseService {
  constructor({ UserBusiness }) {
    super(UserBusiness);
    this._entityBusiness = UserBusiness;
  }

  async authUser(username, password) {
    return await this._entityBusiness.getToken(username, password);
  }

  async getCode(email){
    return await this._entityBusiness.getCode(email);
  }
}

module.exports = UserService;