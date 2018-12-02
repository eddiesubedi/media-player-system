'use strict';

var Hapi = require('hapi');

require('dotenv').config();

var validate = function (decoded, request) {

  console.log(decoded)
  return {
    isValid: true
  }
}

var launchServer = async function () {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.register(require('hapi-auth-jwt2'));
  server.auth.strategy('jwt', 'jwt', {
    key: process.env.TOKEN_SECRET,
    validate,
    verifyOptions: {
      algorithms: ['HS256']
    }
  });
  server.auth.default('jwt');

  server.route(require("./api/home/get_home"));
  server.route(require("./api/auth/routes/post_signup"));
  server.route(require("./api/auth/routes/post_login"));

  await server.start();
  console.log(`Server started at ${server.info.uri}`);
};

launchServer().catch(function quit(err) {

  console.error(err);
  process.exit(1);
});
