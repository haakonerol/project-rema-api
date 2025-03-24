"use strict"
/* -------------------------------------------------------
    | PROJECT REMA API | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router();

const sale = require('../controllers/saleController')
/*------------------------------------------------------- */
// URL:/sales

router.route('/')
    .get(sale.list)
    .post(sale.create);

router.route('/:id')
    .get(sale.read)
    .put(sale.update)
    .patch(sale.update)
    .delete(sale.delete)    
/*------------------------------------------------------- */
// exports:

module.exports = router;