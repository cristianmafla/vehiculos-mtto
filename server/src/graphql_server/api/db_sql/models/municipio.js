'use strict';
module.exports = (sequelize, DataTypes) => {
  const Municipio = sequelize.define('Municipio', {
    id_municipio: {
      type:DataTypes.INTEGER,
      primaryKey:true
    },
    municipio: DataTypes.STRING,
    estado: DataTypes.INTEGER,
    departamento_id: DataTypes.INTEGER
  }, {
      timestamps: false,
      tableName: 'municipios'
  });
  Municipio.associate = function(models) {
    // associations can be defined here
    Municipio.belongsTo(models.Departamento, { foreignKey: 'departamento_id' });
  };
  return Municipio;
};