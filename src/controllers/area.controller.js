const mapper = require("automapper-js");
const { AreaDto } = require("../dtos");

class AreaController {
  constructor({ AreaService }) {
    this._areaService = AreaService;
    this._mapper = mapper;
  }

  async getAll(req, res){
    let area = await this._areaService.getAll();
    area = await this._mapper(AreaDto, area);
    return res.json({data : area})
  }
} 

module.exports = AreaController;
