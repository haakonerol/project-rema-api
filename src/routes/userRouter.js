"use strict"
/* -------------------------------------------------------
    | PROJECT REMA API | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router();

const user = require('../controllers/userController')
/*------------------------------------------------------- */
// URL:/users

router.route('/')
    .get(user.list)
    .post(user.create);

router.route('/:id')
    .get(user.read)
    .put(user.update)
    .patch(user.update)
    .delete(user.delete)    
/*------------------------------------------------------- */
// exports:

module.exports = router;