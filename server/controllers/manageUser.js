module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');
        const { email, password } = req.body
        const users = {
            id: db.users.id,
            email,
            password,
        };
        const profiles = {
            userId: db.profiles.id,
            thumbnail: '',
            about: '',
        }

        db.users.data.push(users);
        db.profiles.data.push(profiles);
        Object.assign(db, {
            users: {
                id: db.users.id + 1,
                data: db.users.data
            },
            profiles: {
                id: db.profiles.id + 1,
                data: db.profiles.data
            }
        })
        res.status(200).send(db);
    }


}