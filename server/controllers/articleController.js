const sqlite3 = require('sqlite3');

module.exports = {
    getAllArticles: (req, res) => {
        let db = new sqlite3.Database("./database.sqlite3", (err) => {err ? console.log('Error when creating the database', err) : read()})

        const read = () => {
            db.all("SELECT * FROM articles", (err, articles) => {
                    res.status(200).send(articles)
            });
        }
        db.close();
    },
    createArticle: (req, res) => {
        const { title, content, category, user_id } = req.body;
        let db = new sqlite3.Database("./database.sqlite3", (err) => err ? console.log('Error when creating the database', err) : insert())

        const insert = () => {
            db.run('INSERT INTO articles (title, content, category, user_id) VALUES (?,?,?,?)', [title, content, category, user_id], () => {
                db.all("SELECT * FROM articles", (err, articles) => {
                    res.status(200).send(articles)
                });
            });
        }
        db.close();
    },
    deleteArticle: (req, res) => {
        const { id } = req.params;
        let db = new sqlite3.Database("./database.sqlite3", (err) => err ? console.log('Error when creating the database', err) : deleteArticle())

        const deleteArticle = () => {
            db.run(`DELETE FROM articles WHERE id = ${id}`, () => {
                db.all("SELECT * FROM articles", (err, articles) => {
                    res.status(200).send(articles)
                });
            });
        }
        db.close();
    },
    updateArticle: (req, res) => {
        const { updatedTitle, updatedContent, updatedCategory } = req.body;
        const { id } = req.params;
        let db = new sqlite3.Database("./database.sqlite3", (err) => err ? console.log('Error when creating the database', err) : updateArticle())

        const updateArticle = () => {
            db.run(`UPDATE articles SET title = ?, content = ?, category = ? WHERE user_id = ?`, [updatedTitle, updatedContent, updatedCategory, id], (err) => {
                console.log(err)
                db.all("SELECT * FROM articles", (err, articles) => {
                    res.status(200).send(articles)
                });
            });
        }
        db.close();
    }
}