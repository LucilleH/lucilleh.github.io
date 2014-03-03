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

app.get('/project', function(req, res) {
	res.sendfile(__dirname + '/project/index.html')
})

app.get('/project/rmg', function(req, res) {
	res.sendfile(__dirname + '/project/random-music-generator.html')
})

app.get('/project/prosopography', function(req, res) {
	res.sendfile(__dirname + '/project/prosopography.html')
})

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
