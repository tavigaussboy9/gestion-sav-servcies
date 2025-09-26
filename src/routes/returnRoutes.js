const express = require('express');
const router = express.Router();

// Modèle Return (à créer)
const Return = require('../models/Return');

// Endpoint pour créer un retour
router.post('/', async (req, res) => {
    const newReturn = new Return(req.body);
    try {
        const savedReturn = await newReturn.save();
        res.status(201).json(savedReturn);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;