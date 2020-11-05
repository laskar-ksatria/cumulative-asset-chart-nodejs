const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: Stirng,
        required: [true, "Company name cannot be empty"]
    },
    current_stocks: {
        type: Number,
        required: [true, "Current Stock cannot be emtpy"]
    },
    stocks: {
        type: Number,
        required: [true, "Amount stock cannot be empty"]
    }
},{versionKey: false, timestamps: {createdAt: 'createdAt'}})