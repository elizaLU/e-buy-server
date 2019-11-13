const Sequelize = require('sequelize')
const db = require('../db')
const Image = require('../image/model')

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
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    // PHONE & EMAIL FROM USER
    // IMAGE FROM IMAGES
  }
)
Image.belongsTo(Ad)
Ad.hasMany(Image)


module.exports = Ad