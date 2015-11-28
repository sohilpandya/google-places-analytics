var fs = require('fs');
var http = require('http');
var apirequest = require('request');

exports.register = function(server, options, next) {

  server.route([{

    method: 'GET',
    path: '/nestoria',
    config: {
      description: 'return the data receive',
      handler: function(request, reply) {

        apirequest('http://api.nestoria.co.uk/api?action=echo&place_name=E97HD&centre_point=51.538446,-0.043795,2km&encoding=json&pretty=1', function(error, response, body) {
          if (!error && response.statusCode == 200) {
            //var object = JSON.parse(body);

            console.log(body);
            //reply(object);
          }
        });

      }

    }

  }]);

  return next();
};

exports.register.attributes = {
  name: 'Nestoria'
};
