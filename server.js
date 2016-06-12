'user strict';

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  var osType = JSON.stringify(req.headers['user-agent']);
  var os = osType.split('(')[1].split(')')[0];
  
  var ipAdd = req.headers['x-forwarded-for'];
  
  var languageArr = req.headers['accept-language'].split(',');
  var language = languageArr[0];

  res.setHeader('Content-Type', 'application/json');
  res.json({'ipaddress':ipAdd, 'language': language, 'software': os});
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log('Server started')
});