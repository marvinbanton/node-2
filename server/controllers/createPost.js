module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');
        const { userId, content } = req.body
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
        })

        res.status(200).send(db)
    }

}