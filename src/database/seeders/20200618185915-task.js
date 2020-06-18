'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const tasks = [...Array(20)].map(() => (
      {
        name: faker.name.jobType(),
        done: false,
        project_id: faker.random.number({ min: 1, max: 10 })
      }
    ));

    return queryInterface.bulkInsert('Tasks', tasks, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
