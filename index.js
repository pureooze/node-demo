import http from 'http';
import express from 'express'
import mongoose from 'mongoose'
import fs from 'fs'
let bodyParser = require('body-parser')

// Define constants
const LISTEN_PORT = 3000
const MONGO_URI = 'mongodb://localhost/noderest'

// Connect to mongoDB
mongoose.connect(MONGO_URI, {
  useMongoClient: true
})
let database = mongoose.connection
database.on('error', function() {
  throw new Error(`Unable to connect to database at ${MONGO_URI}`)
})

// Configure HTTP server
let app = express()
app.use(bodyParser.json())
require('./models/userSchema')
require('./routes')(app)
app.listen(LISTEN_PORT)

// Server is now listening for connections
console.log(`Listening on port ${LISTEN_PORT}`)