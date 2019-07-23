const express = require('express');

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

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})