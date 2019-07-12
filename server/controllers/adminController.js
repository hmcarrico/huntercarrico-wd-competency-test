const sqlite3 = require('sqlite3');

module.exports = {
    getAllUsers: (req, res) => {
        let db = new sqlite3.Database("./database.sqlite3")
            db.all(`SELECT user_id, email, username, photo, role FROM users`, (err, users) => {
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
    updateUser: (req, res) => {
        const { id } = req.params;
        const { role } = req.query;
        let db = new sqlite3.Database("./database.sqlite3")
            db.run(`UPDATE users SET role = ? WHERE user_id = ?`, [role,  id], () => {
                db.all("SELECT * FROM users", (err, users) => {
                    res.status(200).send(users)
                });
            });
        db.close();
    },
}