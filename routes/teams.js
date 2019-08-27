var express = require('express');
var router = express.Router();
var teamCtrl = require('../controllers/teams')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/teams', teamCtrl.index);
router.get('/teams/new', teamCtrl.new);
router.get('/teams/:id', teamCtrl.show);
router.post('/', teamCtrl.create);
router.delete('/teams/:id', teamCtrl.delete);


module.exports = router;
