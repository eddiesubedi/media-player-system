'use strict';

var Axios = require('axios').default;

var url = "https://kitsu.io/api/edge/trending/anime?limit=20";

var getTrendingThisWeek = async function (request, h) {

  var response = await Axios.get(url);
  return response.data;
}

module.exports = getTrendingThisWeek;
