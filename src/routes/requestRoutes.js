const express = require('express');
const router = express.Router();

// Modèle Request (à créer)
const Request = require('../models/Request');

// Endpoint pour créer une demande SAV
router.post('/', async (req, res) => {
    const newRequest = new Request(req.body);
    try {
        const savedRequest = await newRequest.save();
        res.status(201).json(savedRequest);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;