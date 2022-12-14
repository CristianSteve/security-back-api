'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tipo_Componente extends Model {
    static associate(models) {
        Tipo_Componente.hasMany(models.Componente,{
            foreignKey: "Tipo_idComponente",
            as : "Componente"
          }) 
    }
  };
  Tipo_Componente.init({
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "nombre_UNIQUE"
    },
    icon : {
      type : DataTypes.STRING(20),
      allowNull: true
    },
    descArduino : { 
      type : DataTypes.STRING(5),
      allowNull: false,
      unique: "descArduino_UNIQUE"
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Tipo_Componente',
  });
  return Tipo_Componente;
};