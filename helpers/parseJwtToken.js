const jwt = require("jsonwebtoken");

function parseJwtToken(req) {
    let token = null;
    if (req?.headers?.authorization) {
        token = req.headers.authorization.replace("Bearer ", "");
    }


    if (!token) {
        return false
    }

    return jwt.decode(token)
}

module.exports = parseJwtToken;