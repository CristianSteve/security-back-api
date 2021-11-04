"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Configuracion extends Model {
    static associate(models) {
      Configuracion.belongsTo(models.User, {
        foreignKey: "idUser",
        as: "User",
        onDelete: "CASCADE",
        unique: true
      });
    }
  }
  Configuracion.init(
    {
      email: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      whatsapp: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      push: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      apertura: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      cerrar: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      acceso: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      perfil: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Configuracion",
    }
  );
  return Configuracion;
};
