const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect to database
connectDB();

// Init middleware
app.use(express.json());

// Routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running'));
