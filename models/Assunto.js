/**
 * Created by João Marcos BR on 31/05/2016.
 */
module.exports = function(sequelize, DataTypes){
    var schema = sequelize.define("Assunto", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    },{
        classMethods: {
            associar: function(models){
                schema.hasMany(models.Video);
            },
            buscarAssuntosPorId: function (criterioDeBusca, onSuccess, onError) {
                schema.where(id == criterioDeBusca),
                    schema.findAll({
                        order:'"createdAt" DESC'
                    }).then(onSuccess)
                        .catch(onError);
            },
            buscarAssuntosPorIdDisciplina:function(disciplinaId, onSuccess, onError){
                schema.findAll({
                    where: {DisciplinaId:disciplinaId}
                }).then(onSuccess)
                    .catch(onError);
            }
        },
        instanceMethods: {

        }
    });
    return schema;
};
