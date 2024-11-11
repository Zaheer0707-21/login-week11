const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors())

const uname = "zaheer";
const pass = 777;


app.get("/", (req, res) => {
    if (req.query.username === uname && req.query.password == pass) {
        res.send(true);
    } else {
        res.send(false);
    }
})



app.listen(7000, () => {
    console.log(" running...");
})
