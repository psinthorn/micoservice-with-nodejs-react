const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

const srvPort = 4002;
const posts = {};

// GET posts return all posts and comment
app.get('/posts', (req, res) => {
    console.log('return all posts and comment');

});

// POST events receive event frpm event-bus and process
app.post('/events', (req, res) => {
    console.log('receive post event from event-bus');
    const { type, data } = req.body;
   

    if(type === 'PostCreated'){
        const { id, title } = data;
        posts[id] = { id, title, comments: [] }
    }

    if(type === "CommentCreated"){
        console.log('Request to create comment');
        const { id, content, post_id, status } = data;
        
        const post = posts[post_id];
        console.log(post);
        post.comments.push({ id, content, status })
    }

});

// Start server and server port listening
app.listen(srvPort, () => {
    console.log("Query server is running on port: ", srvPort);
});
