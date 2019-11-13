const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


const parserMiddleware = bodyParser.json()
const app = express()
const corsMiddleware = cors()

const port = process.env.PORT || 4000
app.use(corsMiddleware)
app.use(parserMiddleware)

//require("./seeds");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})

const adRouter = require('./ads/router')
app.use(adRouter)

const userRouter = require('./user/router')
app.use(userRouter)

const imageRouter = require('./image/router')
app.use(imageRouter)