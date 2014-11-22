var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var query = db.query('SELECT * FROM messages').then(function(result){
        callback(result);
      }).catch(function(err){
        throw err;
      });

    }, // a function which produces all the messages
    post: function (data, callback) {
      data = data || '';
      var post  = data;
      var query = db.query('INSERT INTO messages (name, text, room) VALUES (:name, :text, :room);',null, {raw: true}, post).then(function(result) {
        console.log("IN first query",result);
        db.query('SELECT COUNT(name) FROM users where name = \'' + post.name + '\'')
          .then(function(result){
            if (result[0]['COUNT(name)'] === 0) {
              db.query('INSERT INTO users (name) VALUES (:name)',null, {raw: true}, {name: post.name}).then(function(result) {
            }).catch(function(err) {
              throw err;
            });
            }
        });
        console.log("INSIDE MESSAGE POST");
        console.log(result);
        callback(result);
      }).catch(function(err) {
        console.log("in catch function");
        throw err;
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var query = db.query('SELECT * FROM users').then(function(result) {
        callback(result);
      }).catch(function(err){throw err;});
      console.log(query);
    },
    post: function (data, callback) {
      data = data || '';
      var post  = data;
      var query = db.query('INSERT INTO users (name) VALUES (:name)',null, {raw: true}, post).then(function(result) {
        callback(result);
      }).catch(function(err){throw err;});
      console.log(query);
    }
  }
};

