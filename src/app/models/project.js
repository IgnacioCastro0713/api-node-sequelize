'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Name field is required'
        }
      }
    },
    priority: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Priority field is required'
        },
        isNumeric: {
          msg: 'Priority field has to be number'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          msg: 'Description field is required'
        }
      }
    },
    delivery_date: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          msg: 'Delivery date field is required'
        }
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'user id field is required'
        }
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
