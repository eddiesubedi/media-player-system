'use strict';

var Joi = require('joi');

var payloadValidator = Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(6).required()
});

module.exports = {
  payloadValidator
};
