const BaseBusiness = require("./base.business");
const mapper = require("automapper-js");
const { Component } = require("./models");

class ComponentBusiness extends BaseBusiness {
  constructor({ ComponentRepository }) {
    super(ComponentRepository, Component);
    this._entityRepository = ComponentRepository;
  }

  async updateStatus(id, dataActually){
    let updatedEntity = await this._entityRepository.update(id, dataActually);
    return mapper(Component, updatedEntity);
  }

  async getItemAccess(idAccess){
    let components = await this._entityRepository.getItemAccess(idAccess);
    return components.map(entity => mapper(Component, entity.toJSON()));
  }
}

module.exports = ComponentBusiness;