var express = require('express');
var router = express.Router();
var playerCtrl = require('../controllers/players')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/players', playerCtrl.index);
router.get('/teams/:id/players/new', playerCtrl.new);
router.get('/players/:id', playerCtrl.show);
router.post('/teams/:id', playerCtrl.create);


module.exports = router;
