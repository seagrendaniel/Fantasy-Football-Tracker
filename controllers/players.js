const Player = require('../models/player');
const Team = require('../models/team');



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
    Team.findById(req.params.id, function(err, team){
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
        res.render('player/:id', {
            Title: player.name,
            user: req.user,
            player,
            // team: player.team
        })
    })
}

function create(req, res) {
    Team.findById(req.params.id, function (err, team) {
        req.body.team = team
        var player = new Player(req.body);
        player.save(function (err) {
            team.players.push(player._id);
            team.save(function(err){
                console.log(team)
                res.redirect(`/teams/${team._id}`)
            })
        })
    })
}

// const create = async(req,res) => {
//     try {
//         const findTeam = await Team.findById(req.params.id);
//         console.log(req.params.id,'<<<<id<<<<<')
//         console.log(findTeam.name, "<<<<<<<<<<<team<<<<<<<<<<<<");
//         const player = await new Player(req.body);
//         console.log(player, '<<<<<<<player<<<<<<<');
//         findTeam.players.push(player);
//         console.log(findTeam.players, "<<<<<<<<<<<<<<<<<<<<<<<");
//         findTeam.save();
//         Player.save(player);
//         res.redirect(`/teams/${req.params.id}`);
//     }
//     catch (err) {
//         res.send('hello');
//     }
// }

module.exports = {
    index,
    new: newPlayer,
    show,
    create
}