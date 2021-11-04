const mapper = require("automapper-js");
const { ConfiguracionDto } = require("../dtos");

class ConfiguracionController {
  constructor({ ConfiguracionService }) {
    this._configuracionService = ConfiguracionService;
    this._mapper = mapper;
  }

  async getAll(req, res){
    let confUser = await this._configuracionService.getAll();
    confUser = await this._mapper(ConfiguracionDto, confUser);
    return res.json({data : confUser})
  }
} 

module.exports = ConfiguracionController;
