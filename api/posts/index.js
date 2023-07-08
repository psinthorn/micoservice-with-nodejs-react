const express = require('express');
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());


const srvPort = 4000;
const posts = {};

// create route
app.get('/posts', (req, res) =>{
    res.send(posts)
})

app.post('/posts', async (req, res) => {
    // create id by using randomBytes and convert to string
    const id = randomBytes(4).toString('hex');
    const { title }  = req.body;
    console.log("detrack title from body: ", req.body);
    posts[id] = {
        id,
        title
    }

    // post to event-bus
    await axios.post('http://localhost:4005/events', {
        type: 'PostCreated',
        data: {
            id,
            title
        }
    });

    res.status(201).send(posts[id]);
});


app.post('/events', (req, res) => {
    console.log('received data from event-bus: ', req.body);
    const { events } = req.body;
    res.send({ events: events });
});

// start server and port listening
app.listen(srvPort, () => {
    console.log("version: 5");
    console.log("posts server in running on port: ", srvPort);
})




