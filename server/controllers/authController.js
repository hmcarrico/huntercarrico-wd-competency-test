const sqlite3 = require('sqlite3');
const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = {
    registerUser: (req, res) => {
        let db = new sqlite3.Database("./database.sqlite3")
        const { username, email, password, role } = req.body;
        bcrypt.hash(password, saltRounds).then(hash => {
            db.run('INSERT INTO users (username, email, password, role) values (?,?,?,?)',[username, email, hash, role], function(err){
                if(err){
                    console.log(err)
                    res.status(500).json({message: "An error occured during sign up"})
                } else {
                    req.session.user = { username, email, role, user_id: this.lastID };
                    res.send({ user: req.session.user })
                }
            })
        })
    },
    loginUser: (req, res) => {
        let db = new sqlite3.Database("./database.sqlite3")
        const { email, password } = req.body;
        db.all('SELECT * FROM users WHERE email = ? LIMIT 1', [email], (err, user) => {
            if (user[0]) {
            bcrypt.compare(password, user[0].password).then(passwordsMatch => {
                if (passwordsMatch) {
                    req.session.user = { username: user[0].username, email: user[0].email, role: user[0].role, user_id: user[0].user_id};
                    res.status(200).send( req.session.user );
                } else {
                    res.status(200).json({ message: 'Wrong email or password' })
                }
            })
                } else {
                    res.status(200).json({ message: "Email does not exist" })
                }
            });
        },
}