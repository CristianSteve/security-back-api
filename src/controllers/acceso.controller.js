const mapper = require("automapper-js");
const { AccesoDto, accesoArd } = require("../dtos");

class AccesoController {
  constructor({ AccesoService, ComponentService, TipoComponenteService }) {
    this._accesoService = AccesoService;
    this._componentService = ComponentService;
    this._tipoComponentService = TipoComponenteService;
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

  async getAccessitems(req, res){
    const { isArduino } = req.query;
    let acceso = await this._accesoService.getAll();
    let type =  await this._tipoComponentService.getAll();

    acceso = await this._mapper(AccesoDto, acceso);
    let data = await this.mapperTypeComponent(acceso, type);
    if(isArduino){
      data = data.map(a => {let ix = {}; a.items.forEach((i) => {ix[i.Tipo_idComponente.descArduino] = i.io}); return this._mapper(accesoArd, ix)});
      data.push({"sv" : "0"})
    }
    return res.json({data})
  }

  async mapperTypeComponent(acceso, type) {
    await Promise.all(
      acceso.map(async (access) => {
        access.items = await this._componentService.getItemAccess(access.id);
        access.items.map((i) => (i.Tipo_idComponente = type.find((t) => i.Tipo_idComponente  === t.id)))
      })
    );
    return acceso;
  }

  async getAction(req, res){
    const { id } = req.params;
    const { action } = await this._accesoService.get(id);                          //obtiene la accion del acceso
    const components = await this._accesoService.getAccessComponent(id);           //obtiene los componentes asociados al acceso
    const [{ Componente }] = components.filter((c) => c.descArduino === "sv");     //obtiene array y su estructura del componente servo
    const [ {io} ] = Componente;                                                   //obtiene entrada del servomotor
    res.json({component : io, action : Number(action), range : action? 60 : 120}); // {"component":3,"action":1,"range":60}
  }
} 

module.exports = AccesoController;
