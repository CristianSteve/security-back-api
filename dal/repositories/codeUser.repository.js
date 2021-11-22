const BaseRepository = require("./base.repository");
const {Op} = require('sequelize');


class CodeUserRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "CodeUser");
    this._db = db;
  }

  async getCode(codigo){
    console.table(codigo)
    return this._db.CodeUser.findOne({ where: { codigo }});
  }
}

module.exports = CodeUserRepository;
