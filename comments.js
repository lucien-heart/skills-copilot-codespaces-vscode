// Create web server for comments
// GET /comments
// POST /comments
// PUT /comments/:id
// DELETE /comments/:id

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Data
let comments = [
    {id: 1, author: 'Joe', body: 'Cool post!'},
    {id: 2, author: 'Bob', body: 'Nice post!'},
    {id: 3, author: 'Mary', body: 'Great post!'}
];

// Routes
app.get('/comments', (req, res) => {
    console.log('GET /comments');
    res.json(comments);
});

app.post('/comments', (req, res) => {
    console.log('POST /comments');
    let comment = req.body;
    comment.id = comments.length + 1;
    comments.push(comment);
    res.json(comment);
});

app.put('/comments/:id', (req, res) => {
    console.log('PUT /comments/:id');
    let id = parseInt(req.params.id);
    let comment = req.body;
    comment.id = id;
    comments[id - 1] = comment;
    res.json(comment);
});

app.delete('/comments/:id', (req, res) => {
    console.log('DELETE /comments/:id');
    let id = parseInt(req.params.id);
    comments = comments.filter((comment) => {
        return comment.id !== id;
    });
    res.json({deleted: true});
});

// Start server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});



// Import modules
const express = require('express');


