'use strict'

var Query = require('../queries/users');
var payLoadValidator = require('../validation/post_signup').payloadValidator;

module.exports = {
  method: 'POST',
  path: '/api/v1/auth/login',
  config: {
    auth: false,
    pre: [{
      method: Query.verifyUserExists,
      assign: 'user'
    }, {
      method: Query.checkPassowrd
    }, {
      method: Query.loginUser,
      assign: 'token'
    }],
    handler: function returnJSON(request, h) {

      return {
        token: request.pre.token
      };
    },
    validate: {
      payload: payLoadValidator
    }
  }
}
