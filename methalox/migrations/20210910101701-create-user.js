'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('users', {
      uuid: {
        type: DataTypes.UUID,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('users');
  }
};
