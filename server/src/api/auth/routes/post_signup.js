'use strict'

var payLoadValidator = require('../validation/post_signup').payloadValidator;
var Query = require('../queries/users');

module.exports = {
  method: 'POST',
  path: '/api/v1/auth/signup',
  config: {
    auth: false,
    pre: [{
      method: Query.verifyUniqueUser,
    }, {
      method: Query.hashPassword,
      assign: 'hasedPassword'
    }, {
      method: Query.addUserToDB,
      assign: 'user'
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
