"use strict"
/* -------------------------------------------------------
    | PROJECT REMA API | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router();

const purchase = require('../controllers/purchaseController')
/*------------------------------------------------------- */
// URL:/purchases

router.route('/')
    .get(purchase.list)
    .post(purchase.create);

router.route('/:id')
    .get(purchase.read)
    .put(purchase.update)
    .patch(purchase.update)
    .delete(purchase.delete)    
/*------------------------------------------------------- */
// exports:

module.exports = router;