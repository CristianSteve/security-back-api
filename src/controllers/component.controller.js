const mapper = require("automapper-js");
const { ComponentDto } = require("../dtos");

class ComponentController {
  constructor({ ComponentService }) {
    this._componentService = ComponentService;
  }

  async getAllComponents(req, res){
    let components = await this._componentService.getAll();
    return res.json({data : components})
  }

  async getComponents(req, res){
    const { component } = req.params;
    let itemComponent = await this._componentService.get(component);
    return res.json({data : itemComponent})
  }

  async createComponent(req, res){
    const { body } = req;
    try {
      let newComponent = await this._componentService.create(body);
      return res.json({data : newComponent})
    }catch(e){
      return res.json({error : "error", message : e.message})
    }
  }

  async modifyComponent(req, res){
    const { body } = req;
    try {
      let updateComponent = await this._componentService.update(body);
      return res.json({data : updateComponent})
    }catch(e){
      return res.json({error : "error", message : e.message})
    }
  }
} 

module.exports = ComponentController;
