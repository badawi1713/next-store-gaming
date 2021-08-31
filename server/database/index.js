const mongoose = require('mongoose')
const { databaseURL } = require('../config')

mongoose.connect(databaseURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

const database = mongoose.connection

module.exports = database
