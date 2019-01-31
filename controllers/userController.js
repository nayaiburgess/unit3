const User = require('../models/users')

const userController = {
    index: (req, res) => {
        User.find({})
            .then((users) => {
                res.send(users)
            })
    },

    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId)
            .then(() => {
                res.sendStatus(200)
            })
    },

    create: (req, res) => {
        User.create(req.body)
            .then((newuser) => {
                res.send(newuser)
            })
    }
}

module.exports = userController