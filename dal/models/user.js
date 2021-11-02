'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Configuracion, { as: "configuracion", foreignKey: "idConfiguracion"});
      User.belongsTo(models.Area, { as: "area", foreignKey: "Area_idArea"});
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: "nombre_UNIQUE"
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: "nombre_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(18),
      allowNull: false,
      unique: "nombre_UNIQUE"
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: "nombre_UNIQUE"
    },
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};