/**
 * Sequelize initialization module
 */

 'use strict';

 import path from 'path';
 import config from '../config/environment';
 import Sequelize from 'sequelize';

 var db = {
 	Sequelize,
 	sequelize: new Sequelize('cms_cultura',config.sequelize.user, config.sequelize.password,config.sequelize.options)
 };

// Insert models below
db.Version = db.sequelize.import('../api/version/version.model');
db.Articulo = db.sequelize.import('../api/articulo/articulo.model');
db.Thing = db.sequelize.import('../api/thing/thing.model');
db.User = db.sequelize.import('../api/user/user.model');

db.Articulo.hasMany(db.Version,{
	foreignKey:"idArticulo",
	//as me permite obtener los comentarios del articulo
    	//con articulo.versiones
    	as:"versiones"
    });
db.Version.belongsTo(db.Articulo,{
	foreignKey:"idArticulo",
	as: "version"
});

module.exports=db;
