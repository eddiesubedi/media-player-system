'use strict';

var Axios = require('axios').default;
var Cheerio = require('cheerio');

var SEASON_URI = 'https://myanimelist.net/anime/season';

var types = {
  TV: 1,
  OVAs: 2,
  Movies: 3,
  Specials: 4,
  ONAs: 5,
};

var getType = function parseType(type, $) {

  var result = [];
  var classToSearch = `.js-seasonal-anime-list-key-${
    types[type]
  } .seasonal-anime.js-seasonal-anime`;

  $(classToSearch).each(function parseAnime() {

    if (!$(this).hasClass('kids') && !$(this).hasClass('r18')) {
      var general = $(this).find('div:nth-child(1)');
      var picture = $(this)
        .find('.image')
        .find('img');
      var prod = $(this).find('.prodsrc');
      var info = $(this).find('.information');

      result.push({
        picture: picture.attr(
          picture.hasClass('lazyload') ? 'data-src' : 'src'
        ),
        synopsis: $(this)
          .find('.synopsis')
          .find('span')
          .text()
          .trim(),
        licensor: $(this)
          .find('.synopsis')
          .find('p')
          .attr('data-licensors')
          .slice(0, -1),
        title: general
          .find('.title')
          .find('p')
          .text()
          .trim(),
        link: general
          .find('.title')
          .find('a')
          .attr('href')
          .replace('/video', ''),
        genres: general
          .find('.genres')
          .find('.genres-inner')
          .text()
          .trim()
          .split('\n      \n        '),
        producers: prod
          .find('.producer')
          .text()
          .trim()
          .split(', '),
        fromType: prod
          .find('.source')
          .text()
          .trim(),
        nbEp: prod
          .find('.eps')
          .find('a')
          .text()
          .trim()
          .replace(' eps', ''),
        releaseDate: info
          .find('.info')
          .find('span')
          .text()
          .trim(),
        score: info
          .find('.scormem')
          .find('.score')
          .text()
          .trim(),
      });
    }
  });

  return result;
};

var getCurrentSeasonalAnime = async function (request, h) {

  var response = await Axios.get(SEASON_URI);
  var $ = Cheerio.load(response.data);
  var currentSeasonalAnime = {
    TV: getType('TV', $),
    OVAs: getType('OVAs', $),
    ONAs: getType('ONAs', $),
    Movies: getType('Movies', $),
    Specials: getType('Specials', $),
  };
  return currentSeasonalAnime;
};

module.exports = getCurrentSeasonalAnime;

// https://github.com/Kylart/MalScraper/blob/master/src/seasons.js
