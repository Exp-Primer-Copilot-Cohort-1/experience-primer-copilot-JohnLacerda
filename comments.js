// Create web server
var express = require('express');
var app = express();
// Create server
var server = require('http').createServer(app);
// Create socket
var io = require('socket.io')(server);
// Create body-parser
var bodyParser = require('body-parser');
// Create cookie-parser
var cookieParser = require('cookie-parser');
// Create session
var session = require('express-session');
// Create connect-flash
var flash = require('connect-flash');
// Create connect-mongo
var MongoStore = require('connect-mongo')(session);
// Create mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
// Create path
var path = require('path');
// Create port
var port = process.env.port || 3000;
// Create user model
var User = require('./models/user');
// Create comment model
var Comment = require('./models/comment');
// Create passport
var passport = require('passport');
// Create passport-local
var LocalStrategy = require('passport-local').Strategy;
// Create passport-facebook
var FacebookStrategy = require('passport-facebook').Strategy;
// Create passport-google-oauth
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// Create passport-twitter
var TwitterStrategy = require('passport-twitter').Strategy;
// Create passport-linkedin-oauth2
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
// Create passport-github2
var GitHubStrategy = require('passport-github2').Strategy;
// Create passport-instagram
var InstagramStrategy = require('passport-instagram').Strategy;
// Create passport-tumblr
var TumblrStrategy = require('passport-tumblr').Strategy;
// Create passport-vkontakte
var VKontakteStrategy = require('passport-vkontakte').Strategy;
// Create passport-odnoklassniki
var OdnoklassnikiStrategy = require('passport-odnoklassniki').Strategy;
// Create passport-yandex
var YandexStrategy = require('passport-yandex').Strategy;
// Create passport-42
var FortyTwoStrategy = require('passport-42').Strategy;

// Create web server
server.listen(port, function() {
    console.log('Server is listening on port ' + port);
});

// Set view engine
app.set('view engine', 'ejs');
// Set views folder
app.set('views', path.resolve