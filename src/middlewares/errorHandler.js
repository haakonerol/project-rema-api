"use strict"

/* -------------------------------------------------------
    | PROJECT REMA API | NODEJS / EXPRESS |
------------------------------------------------------- */

module.exports = (err, req, res, next) => {

    return res.status(res?.errorStatusCode || 500)
            .send({
                error: true,
                message: err.message,
                cause: err.cause,
                body: err.body,
                stack: err.stack
            });
};