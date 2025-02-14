"use strict"
/* -------------------------------------------------------
    | PROJECT REMA API | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router();

const brand = require('../controllers/brandController')
/*------------------------------------------------------- */
// URL:/brands

router.route('/')
    .get(brand.list)
    .post(brand.create);

router.route('/:id')
    .get(brand.read)
    .put(brand.update)
    .patch(brand.update)
    .delete(brand.delete)    
/*------------------------------------------------------- */
// exports:

module.exports = router;