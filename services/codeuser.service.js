const BaseService = require("./base.service");

class CodeUserService extends BaseService {
  constructor({ CodeUserBusiness }) {
    super(CodeUserBusiness);
    this._entityCodeUser = CodeUserBusiness;
  }

}

module.exports = CodeUserService;