'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Ignacio',
        email: 'ignacio@email.com',
        password: bcrypt.hashSync('secret', bcrypt.genSaltSync(10), null)
      },
      {
        name: 'Grizel',
        email: 'grizel@email.com',
        password: bcrypt.hashSync('secret', bcrypt.genSaltSync(10), null)
      },
      {
        name: 'Jorge',
        email: 'jorge@email.com',
        password: bcrypt.hashSync('secret', bcrypt.genSaltSync(10), null)
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
