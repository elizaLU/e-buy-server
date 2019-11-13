const { Router } = require('express')
const router = new Router()
const Image = require('./model')

router.get('/images', (req, res, next) => {
  Image.findAll()
    .then(image => res.json(image))
    .catch(next)
})
//ad.belongsTo(image), so posting new add: http :4000/ads description='slippers' title='slippers, size 7' price=20 imageId=1

router.post('/images', (req, res, next) => {
  Image.create(req.body)
    .then(image => res.json(image))
    .catch(next)
})

module.exports = router