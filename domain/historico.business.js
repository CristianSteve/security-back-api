const BaseBusiness = require("./base.business");
const mapper = require("automapper-js");
const { History } = require("./models");

class HistoryBusiness extends BaseBusiness {
  constructor({ HistoryRepository }) {
    super(HistoryRepository, History);
    this._entityRepository = HistoryRepository;
  }

  async getDate(id, component) {
    let entities = [];
    if(component)
      entities = await this._entityRepository.getDateTypeHistory(id, component);
    else
      entities = await this._entityRepository.getDateHistory(id);
    return entities.map(entity => mapper(History, entity.toJSON()));
  }
}

module.exports = HistoryBusiness;