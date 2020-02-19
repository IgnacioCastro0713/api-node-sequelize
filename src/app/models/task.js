'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: {
      type: DataTypes.STRING,
      validate: {
        msg: 'Name field is required'
      }
    },
    done: {
      type: DataTypes.BOOLEAN,
    },
    project_id: {
      type: DataTypes.INTEGER,
      validate: {
        msg: 'project id is required'
      }
    }
  }, {});
  Task.associate = function (models) {
    Task.belongsTo(models.Project, {
      foreignKey: 'project_id'
    })
  };
  return Task;
};
