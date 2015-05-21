var React = require('react');
var Common = require('../../constants/common');

/**
 * Dou Bai APP
 * @type {*|Function}
 */
var DouBanApp =
  React.createClass({
    render: function(){
      return (
          <div>
            <DouBanMovieSearch />
          </div>
        )
    }
  });

/**
 * DouBanMovieSearch
 * Search engine for Movie and movie data from DouBan.
 * State: The keywords user input.
 * componentDidMount is a method called automatically by React when a component is rendered
 */
var DouBanMovieSearch = React.createClass({
  getInitialState: function() {
    return {
      keywords: ''
    };
  },
  onKeywordChange: function(e) {
    //todo: Add some validation or autocomplete feature.
    this.setState({
      keywords: e.target.value
    });
  },
  render: function() {
    var val = this.state.keywords;
    return (
      <form className="DouBanMovieSearch" action="movie/search" method="GET" onSubmit={this.onSubmit}>
        <h1 className="tc">Movie Search</h1>
        <input type="text" placeholder="please enter movie titles." name="q"
               value={val} onChange={this.onKeywordChange} />
        <input className="btn btn-sm btn-default" type="submit"
               value='search' />
      </form>
    );
  }
});

module.exports = DouBanMovieSearch;


