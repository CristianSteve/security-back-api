'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Historico extends Model {
    static associate(models) {
       Historico.belongsTo(models.Componente,{
        foreignKey: "idAcceso",
        as : "Acceso"
      }) 
    }
  };
  Historico.init({
    descripcion: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    usuario: {
        type: DataTypes.STRING(60),
        allowNull: false
      },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Historico',
  });
  return Historico;
};