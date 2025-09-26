const express = require('express');
const router = express.Router();

// Endpoint pour notifier les utilisateurs
router.post('/', async (req, res) => {
    // Logique de notification ici
    res.status(200).json({ message: 'Notification envoyée' });
});

module.exports = router;