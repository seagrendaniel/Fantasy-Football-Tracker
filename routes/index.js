var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log('hitting')
  res.redirect('/teams' 
  // { 
    // title: '2019 Fantasy Football Depth and Stat Tracker',
    // user: req.user
  // }
  );
});

router.get('/test', function(req, res) {
  res.redirect('/teams' 
  // { 
    // title: '2019 Fantasy Football Depth and Stat Tracker',
    // user: req.user
  // }
  );
})

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
