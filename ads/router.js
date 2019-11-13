const { Router } = require('express')
const router = new Router()
const Ad = require('./model')
const Image = require('../image/model')

router.get('/ads', (req, res, next) => {
  Ad.findAll(
    //{where: {userId = req.params.userId }}
    )
    .then(ad => res.json(ad))
    .catch(next)
})

router.post('/ads', (req, res, next) => {
  Ad.create(req.body, { include: [Image] })
    .then(ad => res.json(ad))
    .catch(next)
})

router.get('/ads/:adId', (req, res, next) => {
  Ad.findByPk(req.params.adId, { include: [Image] })
    .then(ad => {
      if (ad) {
        ad
          .update(req.body)
          .then(ad => res.json(ad))
      } else {
        res.status(404).json({ message: "ad not found" }).end()
      }
    })
    .catch(next)
})

router.put('/ads/:adId', (req, res, next) => {
  Ad.findByPk(req.params.adId)
    .then(ad => {
      if (!ad) { res.status(404).json({ message: "ad not found." }).end() }
      else return ad.update(req.body) //without return, it doesn't log updated ad tot he console
    })
    .then(updatedad => {
      res.status(200).send(updatedad)
    })
    .catch(next)
})
router.delete('/ads/:adId',
  (req, res, next) => {
    Ad.findByPk(req.params.adId)
      .then(ad => {
        if (!ad) {
          res.status(404).end()
        }
      })
    Ad.destroy({
      where: {
        id: req.params.adId,
      }
    })
      .then((number) => {
        res.send({ id: Number(req.params.adId) }).status(401).end()
      })
      .catch(next);
  }
)
module.exports = router