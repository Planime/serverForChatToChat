const Registration = require("../../models/registration");
const _ = require("lodash");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const signature = require("../../config/appSettingsConfig");

async function registrationPost(req, res) {
    const {password, firstName, lastName, email, confirmPassword} = req.body;
    console.log(req.body)
    if (!firstName) {
        res.status(400).json('First name field is required');
        return
    }
    if (!lastName) {
        res.status(400).json('Last name field is required');
        return
    }
    if (!password) {
        res.status(400).json('Password field is required');
        return
    }
    if (password !== confirmPassword) {
        res.status(400).json('Password did not match, please enter same password in 2 fields');
        return
    }
    if (!email) {
        res.status(400).json('Email field is required');
        return
    }

    const hashedPass = await argon2.hash(password);
    const profile = await Registration.create({
        email,
        firstName,
        lastName,
        password: hashedPass,
        createdAt: new Date().getTime(),
        avatar: "",
        work: "",
        currentCity: "",
        aboutMe: "",
        gender: "",
        maritalStatus: ""
    });

    const response = {
        id: profile.id
    };


    const token = jwt.sign({response}, signature, {expiresIn: '6h'});


    res.cookie('token', token, {maxAge: 21600000, httpOnly: true});


    res.status(201).send({token});
}

module.exports = registrationPost;