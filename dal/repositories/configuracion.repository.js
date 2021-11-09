const BaseRepository = require("./base.repository");
const {Op} = require('sequelize');


class ConfiguracionRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Configuracion");
    this._db = db;
  }

  async getConfUser(id) {
    return this._db.Configuracion.findOne({ where: { idUser: id}});
  }
}

module.exports = ConfiguracionRepository;
