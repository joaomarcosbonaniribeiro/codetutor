/**
 * Created by João Marcos BR on 31/05/2016.
 */
var crypto = require("crypto");
module.exports = function (sequelize, DataTypes) {
    var schema = sequelize.define('Usuario', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
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
                },
                buscarPorEmailESenha: function (email, senha, onSuccess, onError) {
                    var shasum = crypto.createHash("sha1");
                    shasum.update(senha);
                    senha = shasum.digest("hex");
                    schema.findOne({where: {email: email, senha: senha}}, {raw: true})
                        .then(onSuccess)
                        .catch(onError);
                }
            },
            instanceMethods: {
                salvar: function (onSuccess, onError) {
                    var senha = this.senha;
                    var shasum = crypto.createHash("sha1");
                    shasum.update(senha);
                    this.senha = shasum.digest("hex");
                    this.save().then(onSuccess).catch(onError);
                }
            }
        });
    return schema;
};