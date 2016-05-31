/**
 * Created by João Marcos BR on 31/05/2016.
 */
module.exports = function(sequelize, DataTypes){
    var schemas = sequelize.define("Assunto", {
        id: {
            type: DataTypes.LONG,
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
                schemas.hasMany(models.Video);
            }
        },
        instanceMethods: {

        }
    })
}
