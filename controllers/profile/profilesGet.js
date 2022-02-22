const mongoose = require("mongoose");
const parseJwtToken = require("../../helpers/parseJwtToken");
const _ = require("lodash");
const fs = require('fs')

async function profilesGet(req, res) {

    const userToken = await parseJwtToken(req);

    if (!userToken) {
        res.status(401).send("Unauthorized");
        return
    }

    const profiles = await mongoose.model("Profile").find();


    const profilesData = profiles.map(({_id, firstName, lastName}) => ({
        _id,
        firstName,
        lastName
    }));

    res.status(200).json(profilesData);
}

module.exports = profilesGet;
