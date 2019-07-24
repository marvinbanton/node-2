module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');
        const { email, password } = req.body;
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
    },

    update: (req, res) => {
        const db = req.app.get('db');
        const { thumbnail, about } = req.body;

        var updateProfile = db.profiles.data.find((user) =>
            user.userId === parseInt(req.params.userId));
        Object.assign(updateProfile, {
            thumbnail,
            about
        });

        res.status(200).send(db);
    },

    profile: (req, res) => {
        const db = req.app.get('db');
        const user = db.users.data.find((users) =>
            users.email === req.query.email);
        console.log(user)

        const profile = db.profiles.data.find((profile) =>
            profile.userId === user.id)
        res.status(200).send(profile);

    }


}