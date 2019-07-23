module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');
        const { email, password } = req.body
        const users = {
            id: db.users.id,
            email,
            password,
        }
        db.users.data.push(users);
        res.status(200).send(users);
    }


}