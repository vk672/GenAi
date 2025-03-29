const express = require('express');
const queryLogic = require('../queryLogic');  


const router = express.Router();

router.get('/', (req, res) => {
    const { q } = req.query;
    if (!q) return res.status(400).json({ error: 'Query parameter is required' });

    const response = queryLogic.processQuery(q);
    res.json({ result: response });
});

module.exports = router;
