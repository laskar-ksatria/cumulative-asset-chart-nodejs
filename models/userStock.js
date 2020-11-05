const mongoose = require('mongoose');

const userStockSchema = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    amount: {
        type: Number,
        required: [true, "Stock amount cannot be empty"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {versionKey: false, timestamps: {createdAt: 'createdAt'}});

const UserStock = mongoose.model(`Stock`, userStockSchema);

module.exports = UserStock;

