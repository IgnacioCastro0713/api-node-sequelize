'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      /*set(val) {
        this.setDataValue('password', hash.make(val)) // TODO: encrypt password
      }*/
    }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Project, {
      foreignKey: 'user_id'
    });
  };
  return User;
};
