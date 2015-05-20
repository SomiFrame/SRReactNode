var React = require('react');
var $ = require('jquery');
var Common = require('../../constants/common');
var MoviesStore = require('../stores/Movies');
var MoviesActionCreator = require('../actions/MoviesActionCreator');

var SearchResult =
  React.createClass({
    getDefaultProps: function() {
      return {
        query: ''
      };
    },
    getInitialState: function() {
      return {
        movies: {}
      }
    },
    componentWillMount: function() {
      MoviesStore.removeChangeListener(this._onChange);
    },
    componentDidMount: function() {
      var query = $('#query').val();
      MoviesStore.addEventListener(this._onChange);
      MoviesActionCreator.createSearchNameAction(query);
    },
    render: function(){
      var total = this.state.movies['total'];
      var message = "";
      if(this.state.movies['subjects'] && this.state.movies['subjects'].length) {
        var movies = this.state.movies['subjects'];
        var MovieRows = [];
        movies.forEach(function(movie) {
          MovieRows.push(<Movie movie={movie} />);
        });
        return (
          <div>
            {MovieRows}
          </div>
        )
      } else {
        if(total === 0) {
          message = "Nothing find.";
        } else {
          message = "Searching";
        }
        return (
          <div>{message}</div>
        );
      }
    },
    _onChange: function() {
      this.setState({
        movies: MoviesStore.getAll()
      });
    }
  });

var Movie = React.createClass({
  getDefaultProps: function() {
    return {
      id: "",
      link: "",
      casts: [],
      directors: [],
      genres: [],
      images: [],
      title: "",
      rating: {},
      year: "",
      title_end: ""
    };
  },
  render: function() {
    var movie = this.props.movie;
    return (
      <section className="movie clearfix row">
        <div className="pull-left movie-image-medium col-sm-3">
          <a href={movie.link}>
            <image src={movie.images.large} alt={movie.title} />
          </a>
        </div>
        <div className="pull-left movie-details col-sm-9">
          <div className="clearfix">
            <div className="col-sm-2">Title: </div>
            <div className="col-sm-6">{movie.title}</div>
          </div>
          <div className="clearfix">
            <div className="col-sm-2">Year: </div>
            <div className="col-sm-6">{movie.year}</div>
          </div>
          <div className="clearfix">
            <div className="col-sm-2">Rating: </div>
            <div className="col-sm-6">{movie.rating.average}</div>
          </div>
          <div className='clearfix'>
            <div className="col-sm-2">Genres: </div>
            <div className="col-sm-6">{this._renderGenres()}</div>
          </div>
        </div>
      </section>
    );
  },
  _renderGenres: function() {
    var genres = this.props.movie.genres;
    var reactGenres = [];
    genres.forEach(function(genre) {
      reactGenres.push(
        (
            <li className="font-form">{genre}</li>
        )
      );
    });
    return (
      <ul className="list-genres">
        {reactGenres}
      </ul>
    );
  }
});

module.exports = SearchResult;
