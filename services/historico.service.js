const BaseService = require("./base.service");
class HistoryService extends BaseService {
  constructor({ HistoryBusiness }) {
    super(HistoryBusiness);
    this._entityBusiness = HistoryBusiness;
  }

  async getDate(id, component) {
    const entity = await this._entityBusiness.getDate(id, component);
    return entity;
  }

  async getFindProductAll(word) {
    const entity = await this._entityBusiness.getProductStock(word);
    return entity;
  }
}

module.exports = HistoryService;