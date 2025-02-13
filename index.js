"use strict"
/* -------------------------------------------------------
    | PROJECT REMA API | NODEJS / EXPRESS |
------------------------------------------------------- */
const express = require('express')
const app = express();

/*------------------------------------------------------- */
// Required modules:

require('dotenv').config()
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000

require('express-async-errors')
/*------------------------------------------------------- */
// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

/*------------------------------------------------------- */
app.use(express.json())
/*------------------------------------------------------- */
// errorHandler
app.use(require('./src/middlewares/errorHandler'))

// Run server
app.listen(PORT, HOST, () => console.log(`Running http://${HOST}:${PORT}`))
/*------------------------------------------------------- */