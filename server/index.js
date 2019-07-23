const express = require('express');
const bodyParser = require('body-parser')
const mu = require('./controllers/manageUser.js')

const app = express();

const db = {
    users: {
        id: 0,
        data: [
            {
                id: '',
                email: '',
                password: '',
            }
        ],
    },
    profiles: {
        id: 0,
        data: [
            {
                userId: '',
                thumbnail: '',
                about: '',
            }
        ],
    },
    posts: {
        id: 0,
        data: [
            {
                userId: '',
                content: '',
            }
        ],
    },
    comments: {
        id: 0,
        data: [
            {
                userId: '',
                postId: '',
                comment: '',
            }
        ],
    },
};

app.set('db', db)
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/sign-up', mu.create);

app.get('/debug', (req, res) => {
    res.status(200).json(req.app.get('db'))
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})