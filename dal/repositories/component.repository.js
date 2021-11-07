const BaseRepository = require("./base.repository");
const {Op} = require('sequelize');


class ComponentRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Componente");
    this._db = db;
  }

  getCategoria(Categoria_idCategoria_stock) {
/*     return this._db["Component"].findAll({
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
    }); */
  }
}

module.exports = ComponentRepository;
