'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Version', {
    idVersion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: DataTypes.STRING,
    contenido: DataTypes.STRING    
  },{
    tableName:"version"
  });
}
