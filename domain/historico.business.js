const BaseBusiness = require("./base.business");
const mapper = require("automapper-js");
const { Stock } = require("./models");

class HistoryBusiness extends BaseBusiness {
  constructor({ StockRepository }) {
    super(StockRepository, Stock);
    this._entityRepository = StockRepository;
  }

  async getCategoria(id) {
    const entities = await this._entityRepository.getCategoria(id);
    return entities.map(entity => mapper(Stock, entity.toJSON()));
  }

  async getProductStock(word) {
    const entities = await this._entityRepository.getProductStock(word);
    return entities.map(entity => mapper(Stock, entity.toJSON()));
  }
}

module.exports = HistoryBusiness;