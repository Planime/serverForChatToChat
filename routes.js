const express = require('express');
const Registration = require("./models/registration");
const _ = require("lodash");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const router = express.Router();


router.get('/', (req, res) => {
    res.status(210).json('app is working')
});

router.post('/registration', async (req, res) => {
    const {password, firstName, lastName, email, confirmPassword} = req.body;
// console.log(req.body)
//     if (!firstName) {
//         res.status(400).json('First name field is required');
//         return
//     }
//     if (!lastName) {
//         res.status(400).json('Last name field is required');
//         return
//     }
//     if (!password) {
//         res.status(400).json('Password field is required');
//         return
//     }
//     if (password !== confirmPassword) {
//         res.status(400).json('Password did not match, please enter same password in 2 fields');
//         return
//     }
//     if (!email) {
//         res.status(400).json('Email field is required');
//         return
//     }

    // const hashedPass = await argon2.hash(password);
    // const profile = await Registration.create({
    //     email,
    //     firstName,
    //     lastName,
    //     password: hashedPass,
    //     createdAt: new Date().getTime(),
    //     avatar: "",
    //     work: "",
    //     currentCity: "",
    //     aboutMe: ""
    // });
    const profile = {}

    const response = {
        email: profile.email,
        firstName: profile.firstName,
        lastName: profile.lastName,
        createdAt: profile.createdAt,
        avatar: profile.avatar,
        work: profile.work,
        currentCity: profile.currentCity,
        aboutMe: profile.aboutMe
    };

    const signature = 'MySecReT_SuPer_Key123455'

    const token = jwt.sign({response}, signature, {expiresIn: '6h'});


    res.cookie('token', token, {maxAge: 21600000, httpOnly: true});


    res.status(201).send("");
});

router.get('/profile');
router.put('/profile');


module.exports = router