"use strict"
/* -------------------------------------------------------
    | PROJECT REMA API | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router();

const category = require('../controllers/categoryController')
/*------------------------------------------------------- */
// URL:/categorys

router.route('/')
    .get(category.list)
    .post(category.create);

router.route('/:id')
    .get(category.read)
    .put(category.update)
    .patch(category.update)
    .delete(category.delete)    
/*------------------------------------------------------- */
// exports:

module.exports = router;