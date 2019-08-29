const User = require('../models/user');
const Player = require('../models/player');

module.exports = {
  index,
  show
};

function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with user
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  User.find(modelQuery)
  .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render(`users/${user._id}`, { 
      users, 
      user: req.user,
      name: req.query.name, 
      sortKey 
    });
  });
}

function show(req, res) {
  User.findById(req.params.id).populate('players').exec(function(err, userInfo){
    res.render(`users/${user._id}`, {
      title: user.name,
      user: req.user,
      userInfo
    })
  })
}