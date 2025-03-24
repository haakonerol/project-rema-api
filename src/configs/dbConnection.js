"use strict";
/* -------------------------------------------------------
    | PROJECT REMA API | NODEJS / EXPRESS ***|
------------------------------------------------------- */
//MongoDB Connection $ npm i mongoose 

const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODBCLOUD)
    .then(() => console.log("* DB Connected *"))
    .catch((err) => console.log("* DB Not Connected *", err));
};

/*------------------------------------------------------- */

module.exports = {
  mongoose,
  dbConnection,
};
