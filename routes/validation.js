const Joi = require('joi');

const validateSignup = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    repeatPassword: Joi.ref('password'),
  });

  return schema.validate(data);
};

const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().min(3),
  });

  return schema.validate(data);
};

const validateProfile = (data) => {
  const schema = Joi.object({
    bio: Joi.string().max(160).allow(null, ''),
    location: Joi.string().allow(null, ''),
    website: Joi.string().allow(null, ''),
    birthday: Joi.date().iso().allow(null, ''),
    facebook: Joi.string().allow(null, ''),
    instagram: Joi.string().allow(null, ''),
    youtube: Joi.string().allow(null, ''),
    linkedin: Joi.string().allow(null, ''),
  });

  return schema.validate(data);
};

const validatePost = (data) => {
  const schema = Joi.object({
    postText: Joi.string().max(280).required(),
  });

  return schema.validate(data);
};

module.exports.validateSignup = validateSignup;
module.exports.validateLogin = validateLogin;
module.exports.validateProfile = validateProfile;
module.exports.validatePost = validatePost;
