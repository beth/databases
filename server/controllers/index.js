var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(results){
        res.send(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var data = req.body;
      models.messages.post(data, function() {
        res.send(200);
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get(function(results){
        res.send(results);
      });
    },
    post: function (req, res) {
      var data = '';
      var data = req.body;
      models.users.post(data, function() {
        res.send(200);
      });

    }
  }
};

