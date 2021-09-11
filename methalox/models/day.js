'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Day.init(
    {
      date: {
        primaryKey: true,
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
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Day',
      tableName: 'days'
    }
  );
  return Day;
};
