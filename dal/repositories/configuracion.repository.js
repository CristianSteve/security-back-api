const BaseRepository = require("./base.repository");
const {Op} = require('sequelize');


class ConfiguuracionRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Configuracion");
    this._db = db;
  }
}

module.exports = ConfiguuracionRepository;
