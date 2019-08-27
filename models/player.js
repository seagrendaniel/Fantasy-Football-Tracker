var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    rushYdsPG: {
        type: Number,
    },
    rushAttPG: {
        type: Number,
    },
    rushTD: {
        type: Number,
    },
    recYdsPG: {
        type: Number,
    },
    recTargets: {
        type: Number,
    },
    recTD: {
        type: Number,
    },
    adp: {
        type: Number,
    }
})

module.exports = mongoose.model('Player', PlayerSchema);