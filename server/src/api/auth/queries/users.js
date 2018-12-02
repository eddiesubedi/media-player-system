'use strict';

var Bcrypt = require('bcryptjs');
var Boom = require('boom');
var Jwt = require('jwt-then');

var DB = require('../../../db/connection');

var users = DB.get('users');
users.createIndex('username', {
  unique: true
});

var verifyUniqueUser = async function uniqueHandler(request, h) {

  var user = await users.findOne({
    username: request.payload.username
  });
  //if user doesnt exist
  if (!user && typeof user === "object") {
    return true;
  }

  return Boom.badRequest("Username is not unique");
}

var hashPassword = async function hashPassword(request, h) {

  var hasedPassword = await Bcrypt.hash(request.payload.password.trim(), 12);
  return hasedPassword;
}

var addUserToDB = async function addToDb(request, h) {

  var newUser = {
    username: request.payload.username,
    password: request.pre.hasedPassword
  }
  var insertedUser = await users.insert(newUser);
  return insertedUser;
}

var verifyUserExists = async function doesUserExist(request, h) {

  var user = await users.findOne({
    username: request.payload.username
  });
  //if user doesnt exist
  if (!user && typeof user === "object") {
    return Boom.badRequest("Login Failed");
  }

  return user;
}

var checkPassowrd = async function compareHasedPassword(request, h) {

  var doPasswordsMatch = await Bcrypt.compare(request.payload.password, request.pre.user.password);
  if (doPasswordsMatch) {
    return true
  }

  return Boom.badRequest("Login Failed");
}

var loginUser = async function loginHandler(request, h) {

  var user = request.pre.user;
  user = {
    _id: user._id,
    username: user.username
  }
  try {
    var token = await Jwt.sign(user, process.env.TOKEN_SECRET, {
      expiresIn: '1d'
    });

  } catch (error) {
    console.log(error);
    return Boom.badRequest("Login Failed");
  }

  return token;
}


module.exports = {
  verifyUniqueUser,
  hashPassword,
  addUserToDB,
  verifyUserExists,
  checkPassowrd,
  loginUser
}
