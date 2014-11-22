var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      var query = db.query('SELECT * FROM messages', function(err, result) {
        if (err) throw err;
        callback(result);
      });

    }, // a function which produces all the messages
    post: function (data, callback) {
      data = data || '';
      var post  = data;
      var query = db.query('INSERT INTO messages SET ?', post, function(err, result) {
        db.query('SELECT COUNT(name) FROM users where name = \'' + post.name + '\'', function(err,result){
          if (result[0]['COUNT(name)'] === 0) {
            var query = db.query('INSERT INTO users SET ?',{name: post.name}, function(err, result) {
              if (err) throw err;
            });
          }
        });
        if (err) throw err;
        callback(result);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var query = db.query('SELECT * FROM users', function(err, result) {
        if (err) throw err;
        callback(result);
      });
    },
    post: function (data, callback) {
      data = data || '';
      var post  = data;
      var query = db.query('INSERT INTO users SET ?', post, function(err, result) {
        if (err) throw err;
        callback(result);
      });
    }
  }
};

