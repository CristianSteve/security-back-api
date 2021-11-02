"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Configuracion extends Model {
    static associate(models) {
      Configuracion.hasOne(models.User, {
        foreignKey: "idConfiguracion",
        as: "User",
        onDelete: "CASCADE"
      });
    }
  }
  Configuracion.init(
    {
      email: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: "email_UNIQUE",
      },
      whatsapp: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: "whatsapp_UNIQUE",
      },
      push: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: "push_UNIQUE",
      },
      estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: "estado_UNIQUE",
      },
      apertura: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: "apertura_UNIQUE",
      },
      cerrar: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: "cerrar_UNIQUE",
      },
      acceso: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: "acceso_UNIQUE",
      },
      perfil: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: "perfil_UNIQUE",
      },
    },
    {
      sequelize,
      modelName: "Configuracion",
    }
  );
  return Configuracion;
};
