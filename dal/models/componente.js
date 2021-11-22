'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Componente extends Model {
    static associate(models) {
        Componente.belongsTo(models.Tipo_Componente, { as: "tipo_componente", foreignKey: "Tipo_idComponente"});
        Componente.belongsTo(models.Acceso, { as: "Acceso", foreignKey: "idAcceso"});
    }
  };
  Componente.init({
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "nombre_UNIQUE"
    },
    descripcion: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Componente',
  });
  return Componente;
};