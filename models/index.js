/**
 * Created by João Marcos BR on 31/05/2016.
 */
var fs = requise("fs");


var Seqquelize =  require("sequelize");
var models = ["Disciplina",
    "Usuarios",
    "Video",
    "Descricao"];

models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname+'/'+model);
});
models.forEach(function(model) {
    model.associar(models);
});

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;