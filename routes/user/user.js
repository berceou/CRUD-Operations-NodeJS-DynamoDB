const express = require('express')
let router = express.Router();
//controller için import:
let userController = require('../../controllers/User')


router.post('/register',userController.register) //localhost:3000/api/user/register
router.post('/login',userController.login) //localhost:3000/api/user/login
module.exports = router;