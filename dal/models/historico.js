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
      allowNull: false,
      unique: "descripcion_UNIQUE"
    },
    usuario: {
        type: DataTypes.STRING(16),
        allowNull: false,
        unique: "usuario_UNIQUE"
      },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: "nombre_UNIQUE"
    },
  }, {
    sequelize,
    modelName: 'Historico',
  });
  return Historico;
};