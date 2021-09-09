/* eslint-disable no-unused-vars */
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const server = express()
const Auth = require('./Auth/auth-router')
const items = require('./Items/items_router')
const upload = require('./upload_image/upload_image')

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', Auth )
server.use('/api/items', items )
server.use('/api/upload', upload )

server.use((err, req, res, next) =>{
    res.status(500).json({
        message:err.message,
        stack: err.stack
    })
})

module.exports = server;
