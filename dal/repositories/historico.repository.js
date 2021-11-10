const BaseRepository = require("./base.repository");
const {Op} = require('sequelize');


class HistoryRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Historico");
    this._db = db;
  }

  getDateHistory(id) {
    console.log(id)
    return this._db.Historico.findAll({where : {createdAt : {[Op.startsWith] : id}}})
  }
  
  getDateTypeHistory(id, Componente_idComponente) {
    console.log(id, Componente_idComponente)
    return this._db.Historico.findAll({where : { [Op.and] : [{createdAt : {[Op.startsWith] : id}}, {Componente_idComponente}]}})
  } 

  getProductStock(product) {
/*     return this._db["Stock"].findAll({
      include: [
        {
          model: this._db["Producto"],
          as: "producto",
          where: { nombre: { [Op.like]: `%${product}%` } },
          require: true,
          right: true,
        },
      ],
    });*/
  } 
}

module.exports = HistoryRepository;
