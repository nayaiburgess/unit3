const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const playlistController = require('../controllers/playlistController')


//show playlists 
router.get('/api/playlists', playlistController.index)
//add a playlist 
router.post('/api/playlists', playlistController.create)
//edit the playlist 
router.patch('/api/playlists/:playlistId', playlistController.update)
//delete the playlist 
router.delete('/api/playlist/:playlistId', playlistController.delete)

//show users 
router.get('/api/user', userController.index)
//add an user 
router.post('/api/user', userController.create)
//delete an user 
router.delete('/api/user/:userId', userController.delete)


module.exports = router