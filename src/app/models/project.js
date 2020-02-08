'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    delivery_date: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
    Project.hasMany(models.Task, {
      foreignKey: 'project_id', sourceKey: 'id'
    });

    Project.belongsTo(models.User, {
      foreignKey: 'user_id', sourceKey: 'id'
    });
  };
  return Project;
};
