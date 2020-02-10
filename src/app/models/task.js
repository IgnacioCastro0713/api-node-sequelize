'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: {
      type: DataTypes.STRING,
    },
    done: {
      type: DataTypes.BOOLEAN
    },
    project_id: {
      type: DataTypes.INTEGER
    }
  }, {});
  Task.associate = function(models) {
    Task.belongsTo(models.Project, {
      foreignKey: 'project_id'
    })
  };
  return Task;
};
