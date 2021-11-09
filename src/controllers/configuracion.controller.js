const mapper = require("automapper-js");
const { ConfiguracionDto } = require("../dtos");

class ConfiguracionController {
  constructor({ ConfiguracionService }) {
    this._configuracionService = ConfiguracionService;
    this._mapper = mapper;
  }

  async getAll(req, res){
    let confUser = await this._configuracionService.getAll();

    if(!confUser) 
      return res.status(409).json({message : "No hay datos a listar"});
    
    confUser = await this._mapper(ConfiguracionDto, confUser);
    return res.json({data : confUser})
  }

  async getConfUser(req, res){
    const { id } = req.params;
    let confUser = await this._configuracionService.getConfUser( id );

    if(!confUser) 
      return res.status(409).json({message : "Usuario no encontrado"});
    
    confUser = await this._mapper(ConfiguracionDto, confUser);
    return res.json({data : confUser})
  }

  async getConf(req, res){
    const { id } = req.params;
    let confUser = await this._configuracionService.get( id );

    if(!confUser) 
      return res.status(409).json({message : "Usuario no encontrado"});
    
    confUser = await this._mapper(ConfiguracionDto, confUser);
    return res.json({data : confUser})
  }

  async getUpConf(req, res){
    const { id } = req.params;
    const entity = req.body;
    let confUser = await this._mapper(ConfiguracionDto, entity);
    confUser = await this._configuracionService.update(id, confUser);
    console.log(confUser);
    res.json({messahe : "pruebas"});
  }
} 

module.exports = ConfiguracionController;
