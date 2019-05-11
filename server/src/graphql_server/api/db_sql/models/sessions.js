import Sequelize from 'sequelize';

module.exports = (sequelize, DataTypes) => {
    const Sessions = sequelize.define('Sessions', {
      sid: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      userId: Sequelize.STRING,
      expires: Sequelize.DATE,
      data: Sequelize.STRING(50000)
    });
  Sessions.associate = function(models) {
  };
  return Sessions;
};


