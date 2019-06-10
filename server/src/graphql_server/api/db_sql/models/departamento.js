'use strict';
module.exports = (sequelize, DataTypes) => {
  const Departamento = sequelize.define('Departamento', {
    id_departamento: {
      type:DataTypes.INTEGER,
      primaryKey:true
    },
    departamento: DataTypes.STRING
  }, {
      timestamps: false,
      tableName: 'departamentos',
  });
  Departamento.associate = function(models) {
    // associations can be defined here
    Departamento.hasMany(models.Municipio, { foreignKey: 'departamento_id' });
  };
  return Departamento;
};