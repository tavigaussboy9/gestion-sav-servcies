const express = require('express');
const router = express.Router();

// Endpoint pour récupérer les performances
router.get('/', async (req, res) => {
    // Logique pour obtenir les performances
    res.status(200).json({ message: 'Données de performances' });
});

module.exports = router;