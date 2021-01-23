const Joi = require('joi');

const validateSignup = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email(),
    password: Joi.string().min(3).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  });

  return schema.validate(data);
};

const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().min(3).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  });

  return schema.validate(data);
};

module.exports.validateSignup = validateSignup;
module.exports.validateLogin = validateLogin;
