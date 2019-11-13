const Sequelize = require('sequelize')
const db = require('../db')

const Ad = db.define(
  'ad',
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    // PHONE & EMAIL FROM USER
    // IMAGE FROM IMAGES
  }
)


module.exports = Ad