const BaseBusiness = require("./base.business");
const mapper = require("automapper-js");
const { Component } = require("./models");

class ComponentBusiness extends BaseBusiness {
  constructor({ ComponentRepository }) {
    super(ComponentRepository, Component);
    this._entityRepository = ComponentRepository;
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

module.exports = ComponentBusiness;