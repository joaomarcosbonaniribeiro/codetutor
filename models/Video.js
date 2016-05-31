/**
 * Created by João Marcos BR on 31/05/2016.
 */
module.exports = function(sequelize, DataTypes){
    var schema = sequelize.define("Video", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        caminho:{
            type:DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        dataPostagem:{
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        classMethods: {
            buscarPorId: function(id, onSuccess, onError){

            },
            associar: function (models) {

            }
        },
        instanceMethods: {
            salvar : function(onSuccess, onError){

            }
        }
    });
    return schema;
};