const mongoose = require("mongoose");
const parseJwtToken = require("../../helpers/parseJwtToken");
const _ = require("lodash");
const fs = require('fs')

async function profileGet(req, res) {

    const userToken = await parseJwtToken(req);

    if (!userToken) {
        res.status(401).send("Unauthorized");
        return
    }

    const profile = await mongoose.model("Profile").findById(userToken.id);

    const userData  = {
        "email": profile.email,
        "firstName": profile.firstName,
        "lastName": profile.lastName,
        "avatar": profile.avatar,
        "work": profile.work,
        "currentCity": profile.currentCity,
        "aboutMe": profile.aboutMe,
        "maritalStatus": profile.maritalStatus,
        "gender": profile.gender
    };

    res.status(200).json(userData);
}

module.exports = profileGet;