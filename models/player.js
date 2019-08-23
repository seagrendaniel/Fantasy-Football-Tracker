var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    }
})

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
    players: [PlayerSchema],

})

module.exports = mongoose.model('Team', TeamSchema);