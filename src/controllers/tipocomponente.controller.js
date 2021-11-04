const mapper = require("automapper-js");
const { TipoComponenteDto } = require("../dtos");

class TipoComponenteController {
  constructor({ TipoComponenteService }) {
    this._tipoComponenteService = TipoComponenteService;
    this._mapper = mapper;
  }

  async getAll(req, res){
    let tComponent = await this._tipoComponenteService.getAll();
    tComponent = await this._mapper(TipoComponenteDto, tComponent);
    return res.json({data : tComponent})
  }
} 

module.exports = TipoComponenteController;
