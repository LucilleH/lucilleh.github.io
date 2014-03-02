// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();
var path = require('path');

app.use(logfmt.requestLogger());
app.use(express.static(__dirname, '/public'));

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});