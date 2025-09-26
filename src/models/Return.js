const mongoose = require('mongoose');

const ReturnSchema = new mongoose.Schema({
    requestId: { type: String, required: true },
    userId: { type: String, required: true },
    productCondition: { type: String, required: true },
    status: { type: String, default: 'en attente' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Return', ReturnSchema);