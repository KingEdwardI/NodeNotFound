var express = require('express'),
  app = express(),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  errorHandler = require('errorhandler'),
  methodOverride = require('method-override'),
  fs = require('fs'),
  port = 80;

app.set('views', __dirname + '/public');
app.use(morgan('combined'));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(__dirname + '/public'));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

app.route('/').get(function(req, res){
  var str = fs.readFileSync('./public/index.html','utf-8');
  res.send(str);
});

console.log("Under Maintenance Server listening on port:" + port);
app.listen(port);
