const mapper = require("automapper-js");
const { AccesoDto } = require("../dtos");

class AccesoController {
  constructor({ AccesoService, ComponentService }) {
    this._accesoService = AccesoService;
    this._componentService = ComponentService;
    this._mapper = mapper;
  }

  async getAll(req, res){
    let acceso = await this._accesoService.getAll();
    acceso = await this._mapper(AccesoDto, acceso);
    const access = await this.mapperComponent(acceso);
    return res.json({data : access})
  }

  async mapperComponent(acceso) {
    await Promise.all(
      acceso.map(async (access) => {
        access.items = await this._componentService.getItemAccess(access.id);
      })
    );
    return acceso;
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
