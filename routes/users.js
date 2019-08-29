var router = require('express').Router();
var usersCtrl = require('../controllers/users');

router.get('/users/:id/show', usersCtrl.index);
router.get('/users/:id/show', usersCtrl.show);
// router.post()


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;