require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validateSignup } = require('../validation');

const User = require('../../models/User');

// @route       GET api/users
// @desc        Fetch all users
// @access      Public
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       POST api/users
// @desc        Register a new user
// @access      Public
router.post('/', async (req, res) => {
  // Validate input
  const { error } = validateSignup(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const isMatch = await User.findOne({ email });
    if (isMatch) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user object
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    // Sign in with a new token
    const payload = {
      id: user.id,
    };

    jwt.sign(
      payload,
      process.env.TOKEN_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.send(token);
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
