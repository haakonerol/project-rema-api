"use strict"
/* -------------------------------------------------------
    | PROJECT REMA API | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router();

const product = require('../controllers/productController')
/*------------------------------------------------------- */
// URL:/products

router.route('/')
    .get(product.list)
    .post(product.create);

router.route('/:id')
    .get(product.read)
    .put(product.update)
    .patch(product.update)
    .delete(product.delete)    
/*------------------------------------------------------- */
// exports:

module.exports = router;