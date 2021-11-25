const BaseRepository = require("./base.repository");
const {Op} = require('sequelize');


class ComponentRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Componente");
    this._db = db;
  }

  updateStatus(id, entity) {
    delete entity.createdAt;
    delete entity.updatedAt;
    return this._db.Componente.update(entity, { where: { id } }); 
  }

  getItemAccess(idAcceso){
    if(idAcceso !== "null")
      return this._db.Componente.findAll({where: { idAcceso }});
    else  
      return this._db.Componente.findAll({where: { idAcceso : {[Op.is] : null }}});
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
