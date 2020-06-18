'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const projects = [...Array(10)].map(() => (
      {
        name: faker.name.title(),
        priority: faker.random.number({ min: 1, max: 5 }),
        description: faker.lorem.text(),
        delivery_date: '2020-09-10',
        user_id: faker.random.number({ min: 1, max: 3 })
      }
    ));

    return queryInterface.bulkInsert('Projects', projects, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
