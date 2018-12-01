'use strict';

var Hapi = require('hapi');

var launchServer = async function () {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  server.route(require("./api/home/get_home"));

  await server.start();
  console.log(`Server started at ${server.info.uri}`);
};

launchServer().catch(function quit(err) {

  console.error(err);
  process.exit(1);
});
