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
  // Demo show page.
  expressApp.get('/', function(req, res) {
    var reactHtml = React.renderToString(ReactApp({}));
    res.render('index.ejs', {reactOutput: reactHtml});
  });
  // Demo for DouBan Movie Search index page.
  expressApp.get('/movie', function(req, res) {
    var reactHtml = React.renderToString(ReactApp({}));
    res.render('movie.ejs', {reactOutput: reactHtml});
  });
  // Demo for DouBan Movie Search's result page.
  expressApp.get('/movie/search', function(req, res) {
    var queryParam = req.query.q;
    var reactHtml = React.renderToString(ReactSearchResultApp({}));
    res.render('movies-result.ejs', {reactOutput: reactHtml, keywords: queryParam});
  });
  // Demo for how to use socket.io.
  expressApp.get('/chartsocketio', function(req,res) {
    res.render('socket.ejs', {reactOutput: 'Chart Demo'});
  });
};