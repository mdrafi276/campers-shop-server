"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.productsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    stock: {
        type: Boolean,
        default: true,
    },
    rating: {
        type: Number,
        required: true,
    },
});
