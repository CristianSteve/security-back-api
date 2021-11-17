"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class CodeUser extends Model {
    static associate(models) {
        CodeUser.belongsTo(models.User, { as: "User", foreignKey: "idUserFrom"});
    }
  }
  CodeUser.init(
    {
      emailEmisor: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      emailReceptor: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      codido: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "CodeUser",
    }
  );
  return CodeUser;
};
