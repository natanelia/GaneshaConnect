var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var bodyParser  = require('body-parser');
var request = require('request');
var cookieParser = require('cookie-parser');

var proxy = httpProxy.createProxyServer();
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var host = process.env.APP_HOST || 'localhost';
var port = isProduction ? 8080 : 3000;
var publicPath = path.resolve(__dirname, '..', 'public');

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

if (!isProduction) {
  // Any requests to localhost:3000/assets is proxied
  // to webpack-dev-server
  app.all(['/assets/*', '*.hot-update.json'], function (req, res) {
    proxy.web(req, res, {
      target: 'http://' + host + ':3001'
    });
  });
}

app.use(express.static(publicPath));

// place your handlers here

app.get('/*', function(req, res) {
  res.sendFile(path.join(publicPath, 'index.html'));
});


// API ROUTES --

var apiRoutes = express.Router();

apiRoutes.post('/authenticate', function(req,res) {
  //console.log(req.body.username + ' ' + req.body.password);
  var success = false;
  request.post({url: 'http://ganeshaconnect.herokuapp.com/users/authenticate', form: {username: req.body.username, password: req.body.password}}, function(error, response, body) {
    var result = JSON.parse(body);
    if (result.success == true) {
      console.log("login");
      console.log(result.token);
      //success = true;
      res.cookie('gctoken', result.token, {maxAge:900000, httpOnly:false});
      res.cookie('tokenlalala', result.token, {maxAge:900000, httpOnly:false});
      res.redirect('/home');
    } else {
      console.log("logout");
      res.redirect('/');
      //res.send("lalal");
    }
  });
  // if (success)
  //   res.redirect('/home');
  // else 
  //   res.redirect('/');
  //res.send("test");
});

app.use('/api', apiRoutes);

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});

