"use strict";
/* -------------------------------------------------------
    | PROJECT REMA API | NODEJS / EXPRESS |
------------------------------------------------------- */
// Swagger Autogen
// https://swagger-autogen.github.io/docs/
// $ npm i swagger-autogen --> JSON creator
// $ npm i swagger-ui-express
// $ npm i redoc-express
/*------------------------------------------------------- */

require('dotenv').config()
const HOST = process.env?.HOST || 'http://127.0.0.1'
const PORT = process.env?.PORT || 8000
/*------------------------------------------------------- *
const options = {
    openapi:          <string>,     // Enable/Disable OpenAPI.                        By default is null
    language:         <string>,     // Change response language.                      By default is 'en-US'
    disableLogs:      <boolean>,    // Enable/Disable logs.                           By default is false
    autoHeaders:      <boolean>,    // Enable/Disable automatic headers recognition.  By default is true
    autoQuery:        <boolean>,    // Enable/Disable automatic query recognition.    By default is true
    autoBody:         <boolean>,    // Enable/Disable automatic body recognition.     By default is true
    writeOutputFile:  <boolean>     // Enable/Disable writing the output file.        By default is true
};
/*------------------------------------------------------- */

// const swaggerAutogen = require('swagger-autogen')({ openapi: 3.0.3, language: 'no-NO' })
const swaggerAutogen = require('swagger-autogen')()

const packageJson = require('./package.json')

const document ={
    // info: {
    //     version: '1.0.0',
    //     title: 'Project Rema API',
    //     description: ' Stock management system API service v.1',
    //     termOfService: 'http://127.0.0.1:8000/#',
    //     contact: { name: 'Hakan Erol', email: 'hakan-erol@outlook.com'},
    //     licence: {}

    // }
    info: {
        version: packageJson.version,
        title: packageJson.name,
        description: packageJson.description,
        // termOfService: 'http://127.0.0.1:8000/#',
        contact: { name: packageJson.author, email: 'hakan-erol@outlook.com'},
        licence: { name: packageJson.license}

    },
    host: `${HOST}:${PORT}`,
    basePath: '/',
    schemes: [ 'http','https' ],
    consumes: ["application/json"],
	produces: ["application/json"],
    //simple token settings:
    securityDefinitions: {
        Token: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
            description: 'Simple Token Authentication * Example: <b>Token ...tokenKey...</b>'
        },
        Bearer: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
            description: 'JWT Authentication * Example: <b>Beare ...accessToken...</b>'

        }
    },
    security: [{ Token: [] }, { Bearer: [] }],
    definitions: {
        "User": require("./src/models/userModel").schema.obj,
        "Firm": require("./src/models/firmModel").schema.obj,
        "Brand": require("./src/models/brandModel").schema.obj,
        "Category": require("./src/models/categoryModel").schema.obj,
        "Product": require("./src/models/productModel").schema.obj,
        "Purchase": require("./src/models/productModel").schema.obj,
        "Sale": require("./src/models/saleModel").schema.obj,
    }
}

/*------------------------------------------------------- */
const outputFile = './src/configs/swagger.json'
const routes = ['./index.js']
/*------------------------------------------------------- */
// Run:

swaggerAutogen(outputFile, routes, document)

// $ node swaggerAutogen.js 