const mapper = require("automapper-js");
const { ComponentDto } = require("../dtos");

class ComponentController {
  constructor({ ComponentService }) {
    this._componentService = ComponentService;
    this._mapper = mapper;
  }

  async getComponents(req, res){
    const { component } = req.params;
    let itemComponent = await this._componentService.get(component);
    return res.json({data : itemComponent})
  }

  async getAllComponents(req, res){
    let components = await this._componentService.getAll();
    return res.json({data : components})
  }

  async createComponent(req, res){
    const { body } = req;
    try {
      let newComponent = await this._mapper(ComponentDto, body);
      newComponent = await this._componentService.create(newComponent);
      return res.json({data : newComponent})
    }catch(e){
      return res.json({error : "error", message : e.message})
    }
  }

  async modifyComponent(req, res){
    const entity = req.body;
    const { id } = req.params
    let upComponent = await this._mapper(ComponentDto, entity);
    upComponent = await this._componentService.update(id, upComponent);
    return res.json({data : "actualizado"})
  }
} 

module.exports = ComponentController;
