const mapper = require("automapper-js");
const { AccesoDto } = require("../dtos");

class AccesoController {
  constructor({ AccesoService }) {
    this._accesoService = AccesoService;
    this._mapper = mapper;
  }

  async getAll(req, res){
    let acceso = await this._accesoService.getAll();
    return res.json({data : acceso})
  }

  async modifyAcceso(req, res){
    const entity = req.body;
    const { id } = req.params
    let upAcceso = await this._mapper(AccesoDto, entity);
    console.table(upAcceso);
    upAcceso = await this._accesoService.update(id, upAcceso);
    return res.json({data : upAcceso})
  }
} 

module.exports = AccesoController;
