const BaseService = require("./base.service");

class CodeUserService extends BaseService {
  constructor({ CodeUserBusiness }) {
    super(CodeUserBusiness);
    this._entityCodeUser = CodeUserBusiness;
  }

  async getCode(email){
    return await this._entityBusiness.getCode(email);
  }

  async validateCode(code){
    return await this._entityBusiness.validateCode(code);
  }
}

module.exports = CodeUserService;