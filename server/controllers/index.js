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
      console.log("MESSAGES POST FUNCTION")
      var data = '';
      req.on('data', function(chunk) {
        data += chunk;
      });
      console.log(data);
      req.on('end', function() {
        models.messages.post(JSON.parse(data), function() {
        res.statusCode = 200;
        res.end();
        });
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
      console.log("IN users:POST FUNCTION");
      var data = '';
      console.log(req.body.name);

      // models.users.post(req.body, function() {
      //   res.statusCode = 200;
      //   res.end();
      //   });

      // req.on('data', function(chunk) {
      //   console.log("IN users:POST FUNCTION in DATA");
      //   data += chunk;
      // });
      // req.on('end', function() {
      //   console.log("IN users:POST FUNCTION in END");
      //   models.users.post(JSON.parse(data), function() {
      //   res.statusCode = 200;
      //   res.end();
      //   });
      // });
      var data = req.body;
      models.users.post(data, function() {
        res.send(200);
      });

    }
  }
};

