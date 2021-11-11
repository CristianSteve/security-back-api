"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.hasMany(models.User, {
        foreignKey: "idProfile",
        as: "User",
      });
    }
  }
  Profile.init(
    {
      tipo: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      descripcion: {
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
      modelName: "Profile",
    }
  );
  return Profile;
};
