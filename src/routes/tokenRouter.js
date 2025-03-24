"use strict";
/* -------------------------------------------------------
    | PROJECT REMA API | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();

const token = require("../controllers/tokenController");
/*------------------------------------------------------- */
// URL:/tokens

router.route("/").get(token.list).post(token.create);

router
  .route("/:id")
  .get(token.read)
  .put(token.update)
  .patch(token.update)
  .delete(token.delete);
/*------------------------------------------------------- */
// exports:

module.exports = router;
