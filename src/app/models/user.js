'use strict';
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Name field is required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Email address already in use!'
      },
      validate: {
        notEmpty: {
          msg: 'Email field is required'
        },
        isEmail: {
          msg: "Must be a valid email address"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Password field is required'
        },
      },
      set(val) {
        if (!val) {
          this.setDataValue('password', "");
          return;
        }
        let password = bcrypt.hashSync(val, bcrypt.genSaltSync(10), null);
        this.setDataValue('password', password)
      }
    }
  }, {
    scopes: {
      withOutPassword: {
        attributes: { exclude: ['password'] },
      }
    }
  });

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
