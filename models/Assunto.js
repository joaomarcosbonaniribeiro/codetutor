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
            }
        },
        instanceMethods: {

        }
    });
    return schema;
};
