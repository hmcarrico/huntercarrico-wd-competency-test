const sqlite3 = require('sqlite3');

module.exports = {
    getAllUsers: (req, res) => {
        let db = new sqlite3.Database("./database.sqlite3")
            db.all(`SELECT user_id, email, username, photo FROM users`, (err, users) => {
                res.status(200).send(users)
            });
        db.close();
    },
    deleteUser: (req, res) => {
        const { id } = req.params;
        let db = new sqlite3.Database("./database.sqlite3")
            db.run(`DELETE FROM users WHERE user_id = ?`, [id], () => {
                db.all("SELECT * FROM users", (err, users) => {
                    res.status(200).send(users)
                });
            });
        db.close();
    },
}