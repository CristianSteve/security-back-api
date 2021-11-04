const BaseRepository = require("./base.repository");
const {Op} = require('sequelize');


class TipoComponenteRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Tipo_Componente");
    this._db = db;
  }
}

module.exports = TipoComponenteRepository;
