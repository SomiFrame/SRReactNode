var eventEmitter = require('events').EventEmitter;

module.exports = {
    DIRNAME: __dirname.substring(0, __dirname.lastIndexOf('/')),
    globalEvtEmitter: eventEmitter,
    generateTimeStamp: function() {
        var date = new Date();
        var hour = date.getHours();
        var mins = date.getMinutes();
        var sec = date.getSeconds();
        return "[" + hour + ":" + mins + ":" + sec +"]"
    }
};