'use strict'

var Query = require('./queries');

module.exports = {
  method: 'GET',
  path: '/api/v1/home',
  config: {
    pre: [
      [{
          method: Query.getWatchList,
          assign: 'watchList'
        }, {
          method: Query.getContinueWatching,
          assign: 'continueWatching'
        },
        {
          method: Query.getContinueWatching,
          assign: 'continueWatching'

        },
        {
          method: Query.getCurrentSeasonalAnime,
          assign: 'currentSeasonalAnime'

        },
        {
          method: Query.getHighestRatedAnime,
          assign: 'highestRatedAnime'

        },
        {
          method: Query.getMostPopularAnime,
          assign: 'mostPopularAnime'

        },
        {
          method: Query.getRecommendation,
          assign: 'recommendation'

        },
        {
          method: Query.getTopAiringAnime,
          assign: 'topAiringAnime'

        },
        {
          method: Query.getTopUpcomingAnime,
          assign: 'topUpcomingAnime'

        },
        {
          method: Query.getTrendingThisWeek,
          assign: 'trendingThisWeek'

        },
        {
          method: Query.getWatchList,
          assign: 'watchList'

        },
      ]
    ],
    handler: function returnJSON(request, h) {

      return {
        continueWatching: request.pre.continueWatching,
        currentSeasonalAnime: request.pre.currentSeasonalAnime,
        highestRatedAnime: request.pre.highestRatedAnime,
        mostPopularAnime: request.pre.mostPopularAnime,
        recommendation: request.pre.recommendation,
        topAiringAnime: request.pre.topAiringAnime,
        topUpcomingAnime: request.pre.topUpcomingAnime,
        trendingThisWeek: request.pre.trendingThisWeek,
        watchList: request.pre.watchList,
      };
    }
  }
}
