const express = require('express')
const userController =   require('../controllers/usersController');

const router = express.Router()

router.get('/', userController.getAllUsers)
router.post('/', userController.createUser)
router.get('/:id', userController.singelUser)
router.put('/:id', userController.updateSelectedUser)
router.delete('/:id', userController.deleteSelectedUser)

module.exports = router