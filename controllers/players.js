const Player = require('../models/player');
const Team = require('../models/team');

module.exports = {
    index,
    new: newPlayer,
    show,
    create,
    delete: deletePlayer,
    edit,
    update
}


function index(req, res) {
    Player.find({}, function (err, players) {
        res.render('players/index', {
            Title: 'Players',
            user: req.user,
            players
        })
    });
}

function newPlayer(req, res) {
    Team.findById(req.params.id, function (err, team) {
        res.render('players/new', {
            title: 'Add Player',
            user: req.user,
            team
        });
    })
    // res.send('working')
}

function show(req, res) {
    Player.findById(req.params.id, function (err, player) {
        res.render(`players/show`, {
            title: player.name,
            user: req.user,
            player,
        })
    })
}

function create(req, res) {
    Team.findById(req.params.id, function (err, team) {
        req.body.team = team
        var player = new Player(req.body);
        player.save(function (err) {
            team.players.push(player._id);
            team.save(function (err) {
                console.log(team)
                res.redirect(`/teams/${team._id}`)
            })
        })
    })
}

function deletePlayer(req, res) {
    Player.findByIdAndRemove(req.params.pid, function(err, p){
        res.redirect(`back`);
    })
}

function edit(req, res) {
    Player.findById(req.params.id, function(err, player){
        res.render('players/edit', {
            title: player.name,
            user: req.user,
            player
        })
    })
}

function update(req, res) {
    Player.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, player){
        res.redirect(`/players/${req.params.id}`);
    })
}



