module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');
        var { userId, content } = req.body
        userId = parseInt(userId);
        const posts = {
            userId,
            postId: db.posts.id,
            content
        }

        db.posts.data.push(posts)
        Object.assign(db, {
            posts: {
                id: db.posts.id + 1,
                data: db.posts.data
            }
        });
        res.status(200).send(db)
    },

    comments: (req, res) => {
        const db = req.app.get('db');
        var { userId, postId, comment } = req.body
        userId = parseInt(userId);
        postId = parseInt(postId);
        const comments = {
            userId,
            postId,
            comment,
        }

        db.comments.data.push(comments)
        Object.assign(db, {
            comments: {
                id: db.comments.id + 1,
                data: db.comments.data
            }
        });
        res.status(200).send(db)
    },

    fetchPosts: (req, res) => {
        const db = req.app.get('db');
        const user = db.users.data.find((users) =>
            users.id === parseInt(req.params.userId));

        const post = db.posts.data.filter((post) =>
            post.userId === user.id)
        res.status(200).send(post);
    }

}