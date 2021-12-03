const express = require("express");
const server = express();
const router = require("./routes");
const cors = require("cors");
const mongoose = require("mongoose");

const DB_KEY = 'mongodb+srv://digtiar:Password1,@cluster0.jckrz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

server.use(express.json());

server.use(cors({
    origin: '*',
    credentials: true
}));

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
    res.header("Access-Control-Allow-Headers", 'Orgin,X-Requested-With,Content-Type,Accept,content-type,application/json')
    next()
})

// Set port
const port = process.env.PORT || "4444";
server.set("port", port);

server.use('/api', router);

async function initApp() {
    try {
        await mongoose.connect(DB_KEY);
        server.listen(port, () => {
            console.log('server start')
        });
    }
    catch (e) {
        console.log(e)
    }
}

initApp()

