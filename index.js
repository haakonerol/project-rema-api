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

app.use('/documents/json', (req, res ) => {
    res.sendFile('swagger.json', { root: './src/configs'})
})

const swaggerUi = require('swagger-ui-express')
const swaggerJson = require('./src/configs/swagger.json')
app.use('/documents/swagger', swaggerUi.serve, swaggerUi.setup(swaggerJson, {}))

const redoc = require('redoc-express')
app.use('/documents/redoc', redoc({ specUrl: '/documents/json', title: 'Redoc UI' }))
/*------------------------------------------------------- */
// Middlewares:
app.use(require('./src/middlewares/searchSortPagination')) 

app.use(require('./src/middlewares/authentication'))

/*------------------------------------------------------- */
// Routes:

// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to Project Rema API',
        documents: {
            swagger: '/documents/swagger',
            redoc: '/documents/redoc',
            json: '/documents/json',
        },
        user: req.user
    })
})

app.use(require('./src/routes/index')) 
/*------------------------------------------------------- */
// errorHandler
app.use(require('./src/middlewares/errorHandler'))

// Run server
app.listen(PORT, HOST, () => console.log(`Running http://${HOST}:${PORT}`))
/*------------------------------------------------------- */