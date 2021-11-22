'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Acceso extends Model {
    static associate(models) {
        Acceso.belongsTo(models.Area, { as: "Area", foreignKey: "Acceso_idArea"});
        Acceso.hasMany(models.Historico,{
            foreignKey: "idAcceso", 
            as : "Historico"
          }) 
        Acceso.hasMany(models.Componente,{
            foreignKey: "idAcceso",
            as : "Componente"
        }) 
    }
  };
  Acceso.init({
    descripcion: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    icon : {
      type : DataTypes.STRING(20),
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Acceso',
  });
  return Acceso;
};