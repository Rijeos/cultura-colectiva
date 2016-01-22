'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Articulo', {
    idArticulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }   
  },{
  	tableName: "articulo"
  });
}
