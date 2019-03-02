'use strict'

var Axios = require('axios');
var Cheerio = require('cheerio');
const {
  MP4UploadScraper
} = require('mp4upload-scraper');

module.exports = {
  method: 'GET',
  path: '/api/v1/mp4',
  config: {
    pre: [],
    handler: async function returnJSON(request, h) {

      // var res = await Axios.get("https://www.masterani.me/anime/watch/3086-ame-iro-cocoa-side-g/8");
      // var $ = Cheerio.load(res.data);
      // var urls = $('video-mirrors').attr(':mirrors');
      // urls = JSON.parse(urls);
      // var url = urls[0];
      // url = url.host.embed_prefix + url.embed_id + url.host.embed_suffix;

      const scrap = await new MP4UploadScraper().scrap("https://mp4upload.com/embed-1e3wzhv8lgo5.html");
      if (scrap.success)
        console.log(scrap.data.sources);
      return "urls";
    }
  }
}
