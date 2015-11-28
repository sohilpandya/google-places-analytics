var Hapi   = require('hapi');
var Inert  = require('inert');
var Home   = require('./home.js');
var Google = require('./googleplacesapi.js');
var env    = require('env2')('.env');

exports.init = function (port,next) {
  var server = new Hapi.Server();
  server.connection({port:port});

  server.register([Inert,Home, Google], function (err) {

    server.route([
  // taken out original / request as google_login is handling this request
  // { method: 'GET', path: '/', handler: { file: "index.html" } },
  // switch these two routes for a /static handler?
  // { method: 'GET', path: '/client.js', handler: { file: './client.js' } },
  // { method: 'GET', path: '/style.css', handler: { file: './style.css' } },
  ]);

    if(err) {
      return next(err);
    }

    server.start(function(err) {
      return next(err,server);

    });
  });
};
