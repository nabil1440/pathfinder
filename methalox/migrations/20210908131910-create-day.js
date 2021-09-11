'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('days', {
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      projectCoding: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      otherCoding: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      gaming: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      social: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      nonCoding: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('days');
  }
};
