const express = require('express')
const bodyParser = require('body-parser')
const parserMiddleware = bodyParser.json()

const app = express()
const port = process.env.PORT || 4000
app.use(parserMiddleware)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})

//const db = require('./db') already imported in model
const adRouter = require('./ads/router')
app.use(adRouter)