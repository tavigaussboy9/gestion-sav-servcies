const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    userId: { type: String, required: true },
    issueDescription: { type: String, required: true },
    status: { type: String, default: 'en attente' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', RequestSchema);