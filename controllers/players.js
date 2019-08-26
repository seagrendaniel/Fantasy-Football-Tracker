const Team = require('../models/player')

module.exports = {
    index,
    new: newTeam,
    show,
    create
}

function index(req, res){
    res.render('teams/index')
}

function newTeam(req, res){
    res.render('teams/new', {title: 'Add Team'});
}

function show(req, res){
    Team.findById(req.params.id, function(err, team){
        res.render('team/:id')
    })
}

function create(req, res){
    var team = new Team(req.body);
    team.save(function(err){
        res.redirect('/teams')
    })
}