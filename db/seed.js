const mongoose = require('./connection')

const User = require('../models/users')

const Playlist = require('../models/playlists')



Playlist.deleteMany({})
    .then(() => {
        return Playlist.create(
                [{
                        name: "Shalain",
                        coverArt: "https://www.billboard.com/files/styles/900_wide/public/media/Ohio-Players-Honey-album-covers-billboard-1000x1000.jpg",
                        song1: 'favsong',
                        song2: 'favsong',
                        song3: 'favsong',
                        song4: 'favsong',
                        song5: 'favsong',
                        song6: 'favsong',
                        song7: 'favsong',
                        song8: 'favsong',
                        song9: 'favsong',
                        song10: 'favsong'
                    }
                ]
            ).then((newplaylist) => {
                console.log(newplaylist, "success")

            })

            .then(() => mongoose.connection.close())
    });


User.deleteMany({})
    .then(() => {
        return User.create(
                [{
                        name: "Nayai ",
                        bio: "this is my bio"
                    },
                ]
            ).then((newReviews) => {
                console.log(newReviews, "success")

            })

            .then(() => mongoose.connection.close())
    });