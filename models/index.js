/**
 * Created by João Marcos BR on 31/05/2016.
 */
var fs = require("fs");
var path = require("path");
var env = process.env.NODE_ENV || "dev";
var dir = path.resolve(__dirname, "..");
var Sequelize = require('sequelize');
var config = require(path.resolve(dir, 'database.json'))["dev"];
var sequelize_fixtures = require('sequelize-fixtures');

var sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: true,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: config.dialectOptions
});

var models = [
    "Disciplina",
    "Usuario",
    "Video",
    "Assunto"
];

models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname+'/'+model);
});

models = require('../models');

for(var r in models){
    models[r].associar(models);
}

sequelize.sync().then(function (){
    // Cria os registros iniciais do banco de dados
    sequelize_fixtures.loadFile('../initialdata.json', models).then(function () {
        console.log("Registros iniciais inseridos");
    })
});

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;