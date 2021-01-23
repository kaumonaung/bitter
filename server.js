const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect to database
connectDB();

// Init middleware
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running'));
