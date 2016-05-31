/**
 * Created by João Marcos BR on 31/05/2016.
 */
module.exports = function(sequelize, DataTypes){
    var schemas = sequelize.define("Disciplina", {
        id: {
            type: DataTypes.LONG,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    },{
        classMethods: {
            associar: function(models){
                schemas.hasMany(models.Assunto);
            }
        },
        instanceMethods: {

        }
    })
}