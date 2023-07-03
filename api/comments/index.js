const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors())

const srvPort = 4001;
const commentByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
    // get post id from url
    const postId = req.params.id;
    console.log(commentByPostId[postId]);

    // get comments by post id
    res.send(commentByPostId[postId] || {});

});


app.post("/posts/:id/comments", async (req, res) => {
    // create comment id 
    const commentId = randomBytes(4).toString('hex');

    // get post id from url
    const postId = req.params.id

    // get content from body 
    const { content } = req.body;

    // get current comments by post id if no comment send back empty array
    const comments = commentByPostId[postId] || [];
    console.log("befor: ", commentByPostId)

    // add new comment to to comments object
    comments.push({ id: commentId, content })

    // add comments back to post
    commentByPostId[postId] = comments

    await axios.post('http://localhost:4005/events', {
        type: 'CommentCreated',
        data: {
            id: commentId,
            content,
            post_id: postId
        }
    });
    
    // send back comments to req
    res.status(201).send(comments);

});


app.post('/events', (req, res) => {
    console.log('received data from event-bus: ', req.body);
    const { events } = req.body;
    res.send({ events: events});
});


// server start and port listening
app.listen(srvPort, () => {
    console.log("comments service is running on port: ", srvPort);
});

