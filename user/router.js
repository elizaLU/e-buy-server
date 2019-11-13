const { Router } = require('express')
const router = new Router()
const User = require('./model')

router.get('/users', (req, res, next) => {
  User.findAll()
    .then(user => res.json(user))
    .catch(next)
})
//ad.belongsTo(User), so posting new add: http :4000/ads description='slippers' title='slippers, size 7' price=20 userId=1

router.post('/users', (req, res, next) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(next)
})

router.get('/users/:UserId', (req, res, next) => {
  User.findByPk(req.params.userId, { include: [Ad] })
    .then(user => {
      if (user) {
        user
          .update(req.body)
          .then(user => res.json(user))
      } else {
        res.status(404).json({ message: "user not found" }).end()
      }
    })
    .catch(next)
})



module.exports = router;