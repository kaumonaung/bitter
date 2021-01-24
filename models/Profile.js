const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
    },
    bio: {
      type: String,
    },
    location: {
      type: String,
    },
    website: {
      type: String,
    },
    birthday: {
      type: Date,
    },
    social: {
      facebook: {
        type: String,
      },
      instagram: {
        type: String,
      },
      youtube: {
        type: String,
      },
      linkedin: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Profile', profileSchema);
