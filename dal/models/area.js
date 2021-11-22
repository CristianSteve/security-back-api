'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Area extends Model {
    static associate(models) {
       //Area.belongsTo(models.Acceso, { as: "acceso", foreignKey: "idAcceso"});
      Area.hasMany(models.User,{
        foreignKey: "Area_idArea",
        as : "User"
      }) 
      Area.hasMany(models.Acceso,{
        foreignKey: "Acceso_idArea",
        as : "Area"
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
    },
    direccion: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: "direccion_UNIQUE"
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Area',
  });
  return Area;
};