const mongoose = require("mongoose");


const Registration = new mongoose.Schema({
    email: {type: String, require: true},
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    password: {type: String, require: true},
    createdAt: {type: String, require: false},
    avatar: {
        fieldname: {type: String},
        originalname: {type: String},
        encoding: {type: String},
        mimetype: {type: String},
        destination: {type: String},
        filename: {type: String},
        path: {type: String},
        size: {type: Number},
    },
    work: {type: String, require: false},
    currentCity: {type: String, require: false},
    aboutMe: {type: String, require: false},
    maritalStatus: {type: String, require: false},
    gender: {type: String, require: false}
});

module.exports = mongoose.model('Profile', Registration)