'use strict';
var bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
		name: DataTypes.STRING,
		email: {
		  type: DataTypes.STRING,
		  unique: {
			args: true,
			msg: 'Email address already in use!'
		  },
		  validate: {
			isEmail: {
			  msg: "Must be a valid email address"
			}
		  }
		},
		password: {
		  type: DataTypes.STRING,
		  set(val) {
			let password = bcrypt.hashSync(val, bcrypt.genSaltSync(10), null);
			this.setDataValue('password', password)
		  }
		}
	  }, {});

  User.associate = function (models) {
	User.hasMany(models.Project, {
	  foreignKey: 'user_id'
	});
  };


  User.validPassword = (password, user) => {
	if (!user.password)
	  return false;
	return bcrypt.compareSync(password, user.password);
  };

  return User;
};
