const Sequelize = require('sequelize')
const db = require('../db')
const Ad = require('../ads/model')

const User = db.define(
  'user',
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  }
)
Ad.belongsTo(User)
User.hasMany(Ad)


module.exports = User;