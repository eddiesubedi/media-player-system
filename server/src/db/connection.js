'use strict';

var Monk = require('monk');

var dbIP = 'localhost'
var dbName = 'anime';
var db = Monk(`${dbIP}/${dbName}`);

module.exports = db;
