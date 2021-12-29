const _ = require("lodash");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const {signature    } = require("../../config/appSettingsConfig");

async function loginPost(req, res) {
    const {password, email} = req.body;

    if (!password) {
        res.status(400).json('password field is required');
        return
    }
    if (!email) {
        res.status(400).json('email field is required');
        return
    }



    const profile = await mongoose.model('Profile').findOne({email});

    if (!profile) {
        res.status(400).json("not found email");
        return
    }


    // Response when login and password are valid
    console.log(signature)
    try {
        if (await argon2.verify(profile.password, password)) {
            console.log("OK");
            const token = jwt.sign(
                {
                    id: profile.id
                }, signature, {expiresIn: '6h'});

            //res.cookie('token', '1234124', {maxAge: 21600000, httpOnly: true});
            await res.status(200).json({token})

        } else {
            res.status(404).json("password does not match")
        }
    } catch (err) {
        res.status(404).json("Error: check your password")
    }

}

module.exports = loginPost;