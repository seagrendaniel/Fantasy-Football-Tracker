var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    byeWeek: {
        type: Number,
        min: 4,
        max: 12,
        required: true
    },
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }],
    image: String

})

module.exports = mongoose.model('Team', TeamSchema);