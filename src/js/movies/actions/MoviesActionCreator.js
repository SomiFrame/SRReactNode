var DouBanDispatcher = require('../dispatcher/DouBanDispatcher');
var DouBanConstants = require('../../constants/common');
var ACTION_TYPE = DouBanConstants.ACTION_TYPE;

module.exports = {
  createSearchNameAction: function(queryParam) {
    DouBanDispatcher.dispatch({
      action: ACTION_TYPE['SEARCH:NAME'],
      queryParam: queryParam
    });
  },
  createSearchTagAction: function(queryParam) {
    DouBanDispatcher.dispatch({
      action: ACTION_TYPE['SEARCH:TAG'],
      queryParam: queryParam
    });
  }
};