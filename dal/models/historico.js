'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Historico extends Model {
    static associate(models) {
       Historico.belongsTo(models.Componente,{
        foreignKey: "Componente_idComponente",
        as : "Componente"
      }) 
    }
  };
  Historico.init({
    descripcion: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    usuario: {
        type: DataTypes.STRING(16),
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