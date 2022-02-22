const mongoose = require("mongoose");
const parseJwtToken = require("../../helpers/parseJwtToken");
const _ = require("lodash");
const Item = require('../../models/registration');
const fs = require("fs")


async function profileAvatarPut(req, res) {
    console.log('222222', req.file)
    const userToken = await parseJwtToken(req);

    if (!userToken) {
        res.status(401).send("Unauthorized");
        return
    }


        if (!req.file) {
            res.status(400).json({msg: 'error'});
            return
        }
        console.log(123)
        const avatar = req.file;

        console.log('add ava new')

        console.log('add ava fs')
        // addAvatar.save();

        // avatar.mv('./' + avatar.name);
        //await profile.save()

        const profile = await mongoose.model("Profile").findByIdAndUpdate(userToken.id,
            {avatar},
            {new: true, upsert: true})


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


                    res.status(200).json(response)
                    console.log("I am here")

        // res.status(200).json(profile)
        console.log(123)



    //
    //
    // const response = {
    //     avatar: profile.avatar
    // };

    // res.status(200).json(' sdf sdg ');
}

module.exports = profileAvatarPut;