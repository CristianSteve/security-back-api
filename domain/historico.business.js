const BaseBusiness = require("./base.business");
const mapper = require("automapper-js");
const { History } = require("./models");

class HistoryBusiness extends BaseBusiness {
  constructor({ HistoryRepository }) {
    super(HistoryRepository, History);
    this._entityRepository = HistoryRepository;
  }

  async getHistory(id) {
/*     const entities = await this._entityRepository.getCategoria(id);
    return entities.map(entity => mapper(Stock, entity.toJSON())); */
  }
}

module.exports = HistoryBusiness;