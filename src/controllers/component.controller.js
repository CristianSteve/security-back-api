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
    const {acceso} = req.query;
    let components = {}
    if(!acceso)
      components = await this._componentService.getAll();
    else
      components = await this._componentService.getItemAccess(acceso);
    return res.json({data : components})
  }


  async createComponent(req, res){
    const { body } = req;
    try {
      let newComponent = await this._mapper(ComponentDto, body);
      newComponent = await this._componentService.create(newComponent);
      return res.json({data : newComponent})
    }catch(e){
      return res.status(409).json({data : e.message})
    }
  }

  async modifyComponent(req, res){
    const entity = req.body;
    const { id } = req.params
    let upComponent = await this._mapper(ComponentDto, entity);
    upComponent = await this._componentService.update(id, upComponent);
    return res.json({data : upComponent})
  }

  async updateAccessComponent(req, res){
    const { id } = req.params
    const { idAcceso } = req.body;
    let component = await this._componentService.get(id);
    component = {...component, idAcceso};
    const upComponent = await this._componentService.update(id, component);
    return res.json({data : upComponent})
  }
} 

module.exports = ComponentController;
