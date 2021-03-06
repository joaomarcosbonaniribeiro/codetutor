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
        titulo:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        nomeArquivo:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        caminho:{
            type:DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        caminhoThumbnail:{
            type:DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        dataPostagem:{
            type: DataTypes.DATE,
            allowNull: false
        },
        tipo:{
            type:DataTypes.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            buscarPorId: function(id, onSuccess, onError){

            },
            buscarPorIdUsuario: function(idUsuario, onSuccess, onError){

            },
            associar: function (models) {

            },
            buscarVideosRecentes: function (onSuccess, onError) {
                //sequelize.query(
                //    'SELECT * FROM "Videos" ORDER BY "createdAt" DESC LIMIT 5'
                //    , {type: sequelize.QueryTypes.SELECT})
                //    .then(onSuccess)
                //    .catch(onError);

                schema.findAll({
                    limit:20,
                    order:'"createdAt" DESC'
                }).then(onSuccess)
                    .catch(onError);
            },

            buscarVideo: function (onSuccess, onError) {
                //sequelize.query(
                //    'SELECT * FROM "Videos" ORDER BY "createdAt" DESC LIMIT 5'
                //    , {type: sequelize.QueryTypes.SELECT})
                //    .then(onSuccess)
                //    .catch(onError);

                schema.findAll({
                    limit:1,
                    order:'"createdAt" DESC'
                }).then(onSuccess)
                    .catch(onError);
            }
        },
        instanceMethods: {
            salvar : function(onSuccess, onError){
                this.save().then(onSuccess).catch(onError);
            }
        }
    });
    return schema;
};