"use strict";
/* -------------------------------------------------------
    | PROJECT REMA API | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");

/*------------------------------------------------------- */
const BrandShcema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    image: {
        type: String,
        trim: true
    }
},
{
    collection: 'brands',
    timestamps: true
})

/*------------------------------------------------------- */

module.exports = mongoose.model('Brands', BrandShcema)