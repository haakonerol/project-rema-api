"use strict"
/* -------------------------------------------------------
    | PROJECT REMA API | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router();
/*------------------------------------------------------- */

router.use('/users', require('./userRouter'))





module.exports = router