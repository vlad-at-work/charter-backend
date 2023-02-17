//require express to start a server
const express = require("express");
//cors to handle cross origin http and https requests
const cors = require("cors");
//listner object using exprees
const app = express();
app.use(cors())
//express.json to handle json data sent from react app.
app.use(express.json());

const data = require("./sampledata") // import fixture

//port to handle request can be 8080 for local and available on deployed platform
const port = process.env.PORT || 8080;
//start server at port available or 8080
app.listen(port, () => {
    console.log("node server initalized on " + port)
})
// route /
app.get("/", (req, res) => {
    res.send('Server running.');
});

app.get("/transaction", (req, res) => {
    res.send(data)
});

app.post("/login", (req, res) => {
    res.send("success");
})

/*
//create random user reciept in range of 1-200 and date from 4 motnhs to back
function sampleData() {
    let date = new Date();
    let time = date.getTime();
    let day = 24 * 60 * 60 * 1000;
    let four_months = time - (120 * 24 * 60 * 60 * 1000)
    for (let i = 0; i < 350; i++) {
        if (time <= four_months) {
            time = date.getTime();
        } else {
            let object = new Object();
            time = time - day;
            object["dateTime"] = time;
            object["user"] = "user3";
            object["price"] = Math.floor(Math.random() * (200 - 1) + 1);
            console.log(object)
        }
    }
}

sampleData()
*/


