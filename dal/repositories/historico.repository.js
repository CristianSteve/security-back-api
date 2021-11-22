const BaseRepository = require("./base.repository");
const {Op} = require('sequelize');


class HistoryRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Historico");
    this._db = db;
  }

  getDateHistory(id) {
    return this._db.Historico.findAll({where : {createdAt : {[Op.startsWith] : id}}})
  }
  
  getDateTypeHistory(id, idAcceso) {
    return this._db.Historico.findAll({where : { [Op.and] : [{createdAt : {[Op.startsWith] : id}}, {idAcceso}]}})
  } 
}

module.exports = HistoryRepository;
