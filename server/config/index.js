const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    serviceName: process.env.SERVICE_NAME,
    databaseURL: process.env.MONGODB_URL,
    developmentMode: process.env.DEVELOPMENT_MODE
}