'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      priority: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      delivery_date: {
        allowNull: false,
        type:Sequelize.DATE
      },
      user_id: {
        type: Sequelize.INTEGER.UNSIGNED.ZEROFILL,
        field: 'user_id',
        references: {
          model: {
            tableName: 'users',
            schema: 'schema'
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

  },
  down: (queryInterface, Sequelize) => {
	return queryInterface.dropTable('projects');
  }
};
