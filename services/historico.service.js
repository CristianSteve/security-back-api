const BaseService = require("./base.service");
class HistoryService extends BaseService {
  constructor({ StockBusiness }) {
    super(StockBusiness);
    this._entityBusiness = StockBusiness;
  }

  async getCategoria(id) {
    const entity = await this._entityBusiness.getCategoria(id);
    return entity;
  }

  async getFindProductAll(word) {
    const entity = await this._entityBusiness.getProductStock(word);
    return entity;
  }
}

module.exports = HistoryService;