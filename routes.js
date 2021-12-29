const registrationPost = require("./controllers/auth/registrationPost");
const loginPost = require("./controllers/auth/loginPost");
const profileGet = require("./controllers/profile/profileGet");
const profilePut = require("./controllers/profile/profilePut");
const express = require('express');


const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(('start'))
});

router.post('/registration', registrationPost);

router.post('/login', loginPost);

router.get('/profile', profileGet);

router.put('/profile', profilePut);



module.exports = router;