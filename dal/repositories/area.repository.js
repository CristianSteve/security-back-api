const BaseRepository = require("./base.repository");
const {Op} = require('sequelize');


class AreaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Area");
    this._db = db;
  }
}

module.exports = AreaRepository;
