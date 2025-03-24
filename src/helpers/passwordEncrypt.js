"use strict"
/* -------------------------------------------------------
    | PROJECT REMA API | NODEJS / EXPRESS |
------------------------------------------------------- */
// passwordEncrypt(pbkdf2 method):

const crypto = require('node:crypto')

// params to use in pbkdf2Sync()
const keyCode = process.env.SECRET_KEY // encryption key
const loopCount = 10_000 // encryption times
const charCount = 32  // write 32 for 64
const encType = 'sha512' // encryption algoritm

module.exports = function (password) {
    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
}



/* ------------------------------------------------------- */