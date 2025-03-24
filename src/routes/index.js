"use strict";
/* -------------------------------------------------------
    | PROJECT REMA API | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/*------------------------------------------------------- */

router.use("/auth", require("./authRouter"));

router.use("/users", require("./userRouter"));

router.use("/tokens", require("./tokenRouter"));

router.use("/brands", require("./brandRouter"));

router.use("/categories", require("./categoryRouter"));

router.use("/firms", require("./firmRouter"));

router.use("/products", require("./productRouter"));

router.use("/sales", require("./saleRouter"));

router.use("/purchases", require("./purchaseRouter"));

module.exports = router;
