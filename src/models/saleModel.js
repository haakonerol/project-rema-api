"use strict"
/* -------------------------------------------------------
    | PROJECT REMA API | NODEJS / EXPRESS |
------------------------------------------------------- */
const {mongoose} = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const SaleSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        requied: true,
    },
    price: {
        type: Number,
        requied: true,
    },
    priceTotal: {
        type: Number,
    }
},{
    collection: 'sales',
    timestamps:true
})
/* ------------------------------------------------------- */

module.exports = mongoose.model('Sale', SaleSchema)