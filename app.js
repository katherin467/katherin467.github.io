var express = require('express');
//var http = require('http'); // not from express
var path = require('path');
var app = express();

app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));
//app.engine('handlebars', handlebars());
//app.set('view engine', 'handlebars');
//app.use(express.favicon());
//app.use(express.logger('dev'));
app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(express.session());
//app.use(app.router);
app.use("/public", express.static('./public')) //path.join(__dirname, '/public')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/about.html')
});
app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/contact.html')
});
app.get('/resume', function(req, res) {
    res.sendFile(__dirname + '/Lim, Katherine - Resume.pdf')
});
app.get('/garyiswin', function(req, res) {
    res.sendFile(__dirname + '/garyiswin.html')
});
app.get('/insight', function(req, res) {
    res.sendFile(__dirname + '/insight.html')
});
app.get('/easyaccess', function(req, res) {
    res.sendFile(__dirname + '/easyaccess.html')
});
app.get('/packetcraft', function(req, res) {
    res.sendFile(__dirname + '/packetcraft.html')
});


app.listen(app.get('port'), () => {
    console.log("Express server listening on port " + app.get('port'));
});
/*
http.createServer(app).listen(app.get('port'), function() {
   console.log('Express server listening on port ' + app.get('port'));
});*/