// express server
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const srvPort = 4005;

// app.get('/events', (req, res) => {
//     res.status(200).send("events request");
// });

app.post('/events', (req, res) => {
    const events = req.body;
    console.log();
    axios.post('http://localhost:4000/events', events);
    axios.post('http://localhost:4001/events', events);
    axios.post('http://localhost:4002/events', events);

    res.send({ status: 'OK' });
});

// start server and port listening
app.listen(srvPort, () => {
    console.log("Events service running on port: ", srvPort);
})








