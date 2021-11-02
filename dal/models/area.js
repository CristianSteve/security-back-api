'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Area extends Model {
    static associate(models) {
       Area.belongsTo(models.Componente, { as: "componente", foreignKey: "Componente_idComponente"});
       Area.hasMany(models.User,{
        foreignKey: "Area_idArea",
        as : "User"
      }) 
    }
  };
  Area.init({
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "nombre_UNIQUE"
    },
    descripcion: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: "descripcion_UNIQUE"
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: "nombre_UNIQUE"
    },
  }, {
    sequelize,
    modelName: 'Area',
  });
  return Area;
};