'use strict';

var Axios = require('Axios').default;

var url = "https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=20&page%5Boffset%5D=0&sort=-userCount"
var getTopAiringAnime = async function (request, h) {

  var response = await Axios.get(url);
  return response.data;
}

module.exports = getTopAiringAnime;
