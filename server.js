const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const Multa = require('./src/models/Multa')

const app = express()
app.use(express.json())


mongoose.connect('mongodb://localhost:27017/nodeapi',
{ useNewUrlParser: true,useUnifiedTopology: true })

requireDir('./src/models')


app.use("/api", require("./src/routes"))

app.listen(3001)

