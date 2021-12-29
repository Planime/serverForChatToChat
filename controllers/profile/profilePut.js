const mongoose = require("mongoose");
const parseJwtToken = require("../../helpers/parseJwtToken");
const _ = require("lodash");


async function profilePut(req, res) {

    const userToken = await parseJwtToken(req);

    if (!userToken) {
        res.status(401).send("Unauthorized");
        return
    }

    const profile = await mongoose.model("Profile").findByIdAndUpdate(userToken.id, req.body, {
        upsert: true,
        new: true
    });


    const response = {
        email: profile.email,
        firstName: profile.firstName,
        lastName: profile.lastName,
        avatar: profile.avatar,
        work: profile.work,
        currentCity: profile.currentCity,
        aboutMe: profile.aboutMe,
        gender: profile.gender,
        maritalStatus: profile.maritalStatus
    };

    res.status(200).json(response);
}

module.exports = profilePut;