const express = require('express');
const queryLogic = require('../queryLogic');

const router = express.Router();

router.get('/', (req, res) => {
    const { q } = req.query;
    
    if (!q) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    if (!queryLogic.explainQuery) {
        return res.status(500).json({ error: 'explainQuery function is not defined in queryLogic.js' });
    }

    const response = queryLogic.explainQuery(q);
    res.json({ explanation: response });
});

module.exports = router;
