const registrationPost = require("./controllers/auth/registrationPost");
const loginPost = require("./controllers/auth/loginPost");
const profileGet = require("./controllers/profile/profileGet");
const profilesGet = require("./controllers/profile/profilesGet");
const profilePut = require("./controllers/profile/profilePut");
const profileAvatarPut = require("./controllers/profile/profileAvatarPut");
const express = require('express');


const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(('start'))
});

router.post('/registration', registrationPost);

router.post('/login', loginPost);

router.get('/profile', profileGet);

router.get('/profiles', profilesGet)

router.put('/profile', profilePut);

router.put('/profile/avatar', profileAvatarPut);


module.exports = router;