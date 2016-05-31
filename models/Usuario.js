/**
 * Created by João Marcos BR on 31/05/2016.
 */
module.exports = function (sequelize, DataTypes) {
    var schema = sequelize.define('Usuario', {
            id: {
                type: DataTypes.LONG,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            papel: {
                type: DataTypes.ENUM,
                allowNull: false,
                values: ["ADMINISTRADOR", "ALUNO", "PROFESSOR"],
                defaultValue: "ALUNO"
            }

        },
        {
            classMethods: {
                listarTodos: function (onSuccess, onError) {

                },
                buscarPorId: function (id, onSuccess, onError) {

                },
                associar: function (models) {
                    schema.hasMany(models.Video);
                }
            },
            instanceMethods: {
                salvar: function (onSuccess, onError) {

                }
            }
        });
    return schema;
};