const Player = require('../models/player')

module.exports = {
    index,
    new: newPlayer,
    show,
    create
}

function index(req, res){
    res.render('players/index')
}

function newPlayer(req, res){
    res.render('players/new', {title: 'Add Player', user: req.user});
}

function show(req, res){
    Player.findById(req.params.id, function(err, player){
        res.render('player/:id')
    })
}

function create(req, res){
    var player = new Player(req.body);
    player.save(function(err){
        res.redirect('/player/index')
    })
}