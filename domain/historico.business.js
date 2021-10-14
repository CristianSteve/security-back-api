const BaseBusiness = require("./base.business");
const mapper = require("automapper-js");
const { History } = require("./models");

class HistoryBusiness extends BaseBusiness {
  constructor({ HistoryRepository }) {
    super(HistoryRepository, History);
    this._entityRepository = HistoryRepository;
  }

  async getDate(id) {
    //const entities = await this._entityRepository.getCategoria(id);
    return [
      {
      id : 1,
      component : "ventana",
      hour : "10:12 05:30:29",
      description : "Apertura inesperada desde el exterior"

    },{
      id : 2,
      component : "puerta",
      hour : "07:11 11:30:29",
      description : "Apertura inesperada desde el exterior"

    }]
    //return entities.map(entity => mapper(History, entity.toJSON()));
  }
}

module.exports = HistoryBusiness;