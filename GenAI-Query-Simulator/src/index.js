require('dotenv').config();
const express = require('express');
const cors = require('cors');

const queryRoutes = require('./routes/query');
const explainRoutes = require('./routes/explain');
const validateRoutes = require('./routes/validate');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/query', queryRoutes);
app.use('/explain', explainRoutes);
app.use('/validate', validateRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
