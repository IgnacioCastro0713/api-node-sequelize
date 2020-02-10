'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: {
      type: DataTypes.STRING
    },
    priority: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.TEXT
    },
    delivery_date: {
      type: DataTypes.DATE
    },
    user_id: {
      type: DataTypes.INTEGER
    }
  }, {});
  Project.associate = function(models) {
    Project.hasMany(models.Task, {
      foreignKey: 'project_id', sourceKey: 'id'
    });

    Project.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
  };
  return Project;
};
