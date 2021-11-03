const BaseRepository = require("./base.repository");
const {Op} = require('sequelize');


class HistoryRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Historico");
    this._db = db;
  }

  getCategoria(Categoria_idCategoria_stock) {
/*     return this._db["Stock"].findAll({
      where: { Categoria_idCategoria_stock },
    }); */
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
