var React = require('react');
var ReactApp = React.createFactory(require('../../src/js/search/components/Search'));
var ReactSearchResultApp = React.createFactory(require('../../src/js/movies/components/SearchResult'));
var NodeCache = require('node-cache');

// Include and initial node cache module.
// 1. right now will using ajax call not on app router.
// 2. will create some ajax router bridge to DouBan's API server and
//    create cache for response that will cut down time when you search
//    for same keywords.
var douBanMovieCache = new NodeCache({stdTTL: 100, checkperiod: 120});
var cacheObject = {q: '', ret: []};

module.exports = function(expressApp) {
  expressApp.get('/', function(req, res) {
    var reactHtml = React.renderToString(ReactApp({}));
    res.render('index.ejs', {reactOutput: reactHtml});
  });
  expressApp.get('/search', function(req, res) {
    var queryParam = req.query.q;
    var reactHtml = React.renderToString(ReactSearchResultApp({}));
    res.render('movies.ejs', {reactOutput: reactHtml, keywords: queryParam});
  });
};