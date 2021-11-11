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
}

module.exports = ComponentBusiness;