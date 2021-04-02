// require('dotenv').config();
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { validateLogin } = require('../validation');

const User = require('../../models/User');

// @route       GET api/auth
// @desc        Get auth user
// @access      Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       POST api/auth
// @desc        Authenticate and login user, and get token
// @access      Private
router.post('/', async (req, res) => {
  // Validate input
  const { error } = validateLogin(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Sign in with a new token
    const payload = {
      id: user.id,
    };

    jwt.sign(payload, process.env.TOKEN_SECRET, (err, token) => {
      if (err) throw err;
      res.send(token);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
