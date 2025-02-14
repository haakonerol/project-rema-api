"use strict";
/* -------------------------------------------------------
    | PROJECT REMA API | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/*------------------------------------------------------- */

router.use("/users", require("./userRouter"));

router.use("/tokens", require("./tokenRouter"));

router.use("/brands", require("./brandRouter"));

router.use("/categories", require("./categoryRouter"));

router.use("/firms", require("./firmRouter"));

module.exports = router;
