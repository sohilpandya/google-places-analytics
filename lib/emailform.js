var redisClient = require('redis');
var env = require('env2')('.env');
var client = redisClient.createClient(process.env.REDIS_URL, {no_ready_check: true});


exports.register = function (server, options, next) {

  server.route([
  {
    method: 'GET',
    path: '/emailform/{name}/{email}/{location}',
    config: {
      description: 'return the home page',

      handler: function(request,reply){
        var stamp = Date.now();
        client.hmset(stamp, "name", request.params.name, "email", request.params.email, "location", request.params.location );
        console.log(request.params);
        return reply("Thank You!");
      }


    }
  }

  ]);

  return next();
};

exports.register.attributes = {
  name: 'EmailForm'
};
