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
    const event = req.body;
    console.log();
    axios.post('http://localhost:4000/events', event).catch((err) => { console.loog(err.message)});
    axios.post('http://localhost:4001/events', event).catch((err) => { console.loog(err.message)});
    axios.post('http://localhost:4002/events', event).catch((err) => { console.loog(err.message)});
    axios.post('http://localhost:4003/events', event).catch((err) => { console.loog(err.message)});

    res.send({ status: 'OK' });
});

// start server and port listening
app.listen(srvPort, () => {
    console.log("Events service running on port: ", srvPort);
})






<<<<<<< HEAD


=======
>>>>>>> 8667dc069fe38968c61cfb96be5b673e0ce8ed1a
