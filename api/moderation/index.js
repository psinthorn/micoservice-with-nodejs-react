const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const srvPort = 4003;

app.post('/events', (req, res) => {
    console.log("moderation service is running");
});




app.listen(srvPort, () => {
    console.log("moderation service is running and listen on port: ", srvPort);
})
