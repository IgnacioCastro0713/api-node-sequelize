'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    done: DataTypes.BOOLEAN,
    project_id: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    Task.belongsTo(models.Project, {
      foreignKey: 'project_id'
    })
  };
  return Task;
};
