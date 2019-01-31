const Playlist= require('../models/playlists')

const playlistController = {
    index: (req, res) => {
        Playlist.find({})
            .then((playlists) => {
                res.send(playlists)
            })
    },
   
    update: (req, res) => {
        Playlist.findByIdAndUpdate(req.params.playlistId, req.body)
            .then((playlist) => {
                playlist.save()
                res.send(playlist)
            })
    },
    delete: (req, res) => {
        Playlist.findByIdAndDelete(req.params.playlistId)
            .then(() => {
                res.sendStatus(200)
            })
    },
    create: (req, res) => {
        Playlist.create(req.body)
            .then((newplaylist) => {
                res.send(newplaylist)
            })
    }
}

module.exports = playlistController