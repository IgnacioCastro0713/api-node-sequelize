'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    delivery_date: DataTypes.DATE
  }, {});
  Project.associate = function(models) {
    Project.hasMany(models.Task, {
      foreignKey: 'project_id', sourceKey: 'id'
    });
  };
  return Project;
};
