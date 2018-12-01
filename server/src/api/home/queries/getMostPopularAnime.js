'use strict';

var Axios = require('axios').default;

var url = "https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&page%5Boffset%5D=0&sort=-userCount";

var getMostPopularAnime = async function (request, h) {

  var response = await Axios.get(url);
  return response.data;
}

module.exports = getMostPopularAnime;
