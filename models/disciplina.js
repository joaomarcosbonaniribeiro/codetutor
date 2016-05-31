/**
 * Created by João Marcos BR on 31/05/2016.
 */
module.exports = function(sequelize, DataTypes){
    var schema = sequelize.define("Disciplina", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },{
        classMethods: {
            associar: function(models){
                schema.hasMany(models.Assunto);
            }
        },
        instanceMethods: {

        }
    });
    return schema;
};