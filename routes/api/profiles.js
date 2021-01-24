const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { validateProfile } = require('../validation');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route       GET api/profile
// @desc        Get all profiles
// @access      Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       GET api/profile/me
// @desc        Get current profile
// @access      Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    });

    if (!profile) {
      return res.status(500).json({ message: 'No profile found' });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       GET api/profile/:user_id
// @desc        Get profile by user ID
// @access      Public
router.get('/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       POST api/profile
// @desc        Create or update profile
// @access      Private
router.post('/', auth, async (req, res) => {
  // Validate input
  const { error } = validateProfile(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const {
    bio,
    location,
    website,
    birthday,
    facebook,
    instagram,
    youtube,
    linkedin,
  } = req.body;

  // Build profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (bio) profileFields.bio = bio;
  if (location) profileFields.location = location;
  if (website) profileFields.website = website;
  if (birthday) profileFields.birthday = birthday;

  // Build socials in profile object
  profileFields.social = {};
  if (facebook) profileFields.social.facebook = facebook;
  if (instagram) profileFields.social.instagram = instagram;
  if (youtube) profileFields.social.youtube = youtube;
  if (linkedin) profileFields.social.linkedin = linkedin;

  try {
    // Fill in name with user name from database
    const user = await User.findById(req.user.id).select('-password');
    profileFields.name = user.name;

    // Check if profile already exists
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );

      return res.json(profile);
    }

    profile = new Profile(profileFields);
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       DELETE api/profile
// @desc        Delete profile, user & user's posts
// @access      Public
router.delete('/', auth, async (req, res) => {
  try {
    // TODO: Delete posts

    // Delete profile
    await Profile.findOneAndRemove({ user: req.user.id });

    // Delete user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ message: 'User, profile and posts deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
