'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: {
      type: DataTypes.STRING,
      validate: {
        msg: 'Name field is required'
      }
    },
    priority: {
      type: DataTypes.INTEGER,
      validate: {
        msg: 'Priority field is required'
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        msg: 'Description field is required'
      }
    },
    delivery_date: {
      type: DataTypes.DATE,
      validate: {
        msg: 'Delivery date field is required'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      validate: {
        msg: 'user id field is required'
      }
    }
  }, {});
  Project.associate = function (models) {
    Project.hasMany(models.Task, {
      foreignKey: 'project_id', sourceKey: 'id'
    });

    Project.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
  };
  return Project;
};
