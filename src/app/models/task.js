'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Name field is required'
        }
      }
    },
    done: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: {
          msg: 'done field is required'
        }
      }
    },
    project_id: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'project id is required'
        }
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
