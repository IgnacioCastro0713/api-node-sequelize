'use strict';
var bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
	name: DataTypes.STRING,
	email: {
	  type: DataTypes.STRING,
	  validate: {
		isEmail: true
	  }
	},
	password: {
	  type: DataTypes.STRING
	}
  }, {});
  User.associate = function (models) {
	User.hasMany(models.Project, {
	  foreignKey: 'user_id'
	});
  };


  User.validPassword = (password, user) => {
	return bcrypt.compareSync(password, user.password);
  };

  User.beforeCreate(user => {
	user.password = bcrypt.hashSync(
		user.password,
		bcrypt.genSaltSync(10),
		null
	);
  });

  return User;
};
