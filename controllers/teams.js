const Team = require('../models/team')
const Player = require('../models/player')

module.exports = {
    index,
    new: newTeam,
    show,
    create,
    delete: deleteTeam
}

function index(req, res) {
    Team.find({}, function (err, teams) {
        res.render('teams/index', {
            title: 'I Love Fantasy Football',
            teams,
            user: req.user
        })
    });
}

function newTeam(req, res) {
    res.render('teams/new', { title: 'Add Team', user: req.user });
}

function show(req, res) {
    Team
        .findById(req.params.id)
        .populate('players')
        .exec(function (err, team) {
            console.log(team);
            res.render('teams/show', {
                user: req.user,
                title: team.name,
                team

            });
        })
}

function create(req, res) {
    var team = new Team(req.body);
    team.save(function (err) {
        res.redirect('/teams')
    })
}

function deleteTeam(req, res) {
    Team.findByIdAndRemove(req.params.id).then(function (err, teams) {
        res.redirect('/teams')
    })
}
