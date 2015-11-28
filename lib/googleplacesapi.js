var apirequest = require('request');
exports.register = function (server, options, next) {

  server.route([
  {
    method: 'GET',
    path: '/data',
    config: {
      description: 'return the data receive',
      handler: function (request, reply) {
        apirequest('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.5376369,-0.0459709&radius=2000&types=restaurant&key='+ process.env.GOOGLE_PLACES, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            var object = JSON.parse(body);

          console.log(object.results); // Show the HTML for the Google homepage.
          reply(object.results);
          }
        });

          // return reply('Here is what I receive: ' + JSON.stringify(request.payload));
      }
    }
  }

  ]);

  return next();
};

exports.register.attributes = {
  name: 'Data'
};
