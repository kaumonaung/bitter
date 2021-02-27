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
    bio: Joi.string().max(160),
    location: Joi.string(),
    website: Joi.string().domain(),
    birthday: Joi.date().iso(),
    facebook: Joi.string(),
    instagram: Joi.string(),
    youtube: Joi.string(),
    linkedin: Joi.string(),
  });

  return schema.validate(data);
};

const validatePost = (data) => {
  const schema = Joi.object({
    text: Joi.string().max(280).required(),
  });

  return schema.validate(data);
};

module.exports.validateSignup = validateSignup;
module.exports.validateLogin = validateLogin;
module.exports.validateProfile = validateProfile;
module.exports.validatePost = validatePost;
