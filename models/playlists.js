const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Playlist = new Schema({
    name: String,
    coverArt: String,
    song1: String,
    song2: String,
    song3: String,
    song4: String,
    song5: String,
    song6: String,
    song7: String,
    song8: String,
    song9: String,
    song10: String,


})

module.exports = mongoose.model("Playlist", Playlist)