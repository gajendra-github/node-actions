const express = require('express');
const app = express();
const path = require('path');


//setup middleware to handle static file..where we pull those static file from..
//set up middleware to handle static file
//tell express where in the file system those static files are
app.use(express.static(path.join(__dirname, '/public/')));


app.get("/", (req, res) => {
    res.send("Node Js");
});

app.listen(3000, () => {
    console.log('Listening to port 3000');
});

