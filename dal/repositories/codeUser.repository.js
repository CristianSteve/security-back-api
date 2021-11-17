const BaseRepository = require("./base.repository");
const {Op} = require('sequelize');


class CodeUserRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "CodeUser");
    this._db = db;
  }
}

module.exports = CodeUserRepository;
