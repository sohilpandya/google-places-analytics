var fs = require('fs');
var http = require('http');

exports.register = function(server, options, next) {

server.route([{
      method: 'POST',
      path: '/',
      config: {
        description: 'return the data receive',
        handler: function(request, reply) {

          // var options = {
          //
          //   hostname: 'api.nestoria.co.uk',
          //   port: 80,
          //   path: 'api?action=echo&encoding=json&parameter=value',
          //   method: 'GET'
          //
          // };
          //
          // var dataDef = '';
          //
          // var request = http.request(options, function(res) {
          //     var body = '';
          //     res.setEncoding('utf8');
          //     res.on(data, function(chunk){
          //       body += chunk;
          //     }); api ? action = echo & encoding = json & parameter = valueapi ? action = echo & encoding = json & parameter = value
          //
          //   res.on('end', function() {
          //     var data = JSON.parse(body);
          //     if (data[0]) {
          //       dataDef = (data[0].text);
          //       callback(null, dataDef);
          //     } else {
          //       callback("not info", null)
          //     }
          //
          //   });
          //
          // });

        request.end();

      }

      return reply('Here is what I receive: ' + JSON.stringify(request.payload));
    }
  }
}

]);

return next();
};

exports.register.attributes = {
  name: 'Data'
};
