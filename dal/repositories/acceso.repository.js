const BaseRepository = require("./base.repository");
const {Op} = require('sequelize');
const { QueryTypes } = require('sequelize');
const sequelize = require('sequelize');


class AccesoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Acceso");
    this._db = db;
  }

  getAccessitems(){
    return this._db.Tipo_Componente.findAll({
      include: [
        {
          model: this._db.Componente,
          as: "Componente",
          require: true,
          right: true,
          /* attributes : ['nombre'] */
        }
      ],
    });
  } 

  getAccessComponent(idAcceso){
    return this._db.Tipo_Componente.findAll({
      include: [
        {
          model: this._db.Componente,
          as: "Componente",
          where : {idAcceso},
          require: true,
          right: true,
        }
      ],
    });
  }
}

module.exports = AccesoRepository;
