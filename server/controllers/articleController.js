const sqlite3 = require('sqlite3');

module.exports = {
    getAllArticles: (req, res) => {
        let db = new sqlite3.Database("./database.sqlite3")
            db.all("SELECT * FROM articles", (err, articles) => {
                res.status(200).send(articles)
            });
        db.close();
    },
    articleType: (req, res) => {
        const {category} = req.query;
        let db = new sqlite3.Database("./database.sqlite3")
        db.all("SELECT * FROM articles WHERE category = ?", [category], (err, articles) => {
            res.status(200).send(articles)
        });
    db.close(); 
    },
    getSingleArticles: (req, res) => {
        const { id } = req.params;
        let db = new sqlite3.Database("./database.sqlite3")
            db.all("SELECT * FROM articles where article_id = ?", [id], (err, articles) => {
                res.status(200).send(articles)
            });
        db.close();
    },
    createArticle: (req, res) => {
        console.log(req.body)
        const { title, content, category, image,  user_id } = req.body;
        let db = new sqlite3.Database("./database.sqlite3")
            db.run('INSERT INTO articles (title, content, category, image, user_id) VALUES (?,?,?,?,?)', [title, content, category, image, user_id], () => {
                db.all("SELECT * FROM articles", (err, articles) => {
                    res.status(200).send(articles)
                });
            });
        db.close();
    },
    deleteArticle: (req, res) => {
        const { id } = req.params;
        let db = new sqlite3.Database("./database.sqlite3")
            db.run(`DELETE FROM articles WHERE article_id = ?`, [id], () => {
                db.all("SELECT * FROM articles", (err, articles) => {
                    res.status(200).send(articles)
                });
            });
        db.close();
    },
    updateArticle: (req, res) => {
        const { updatedTitle, updatedContent, updatedImage } = req.body;
        const { id } = req.params;
        let db = new sqlite3.Database("./database.sqlite3");
            db.run(`UPDATE articles SET title = ?, content = ?, image = ? WHERE article_id = ?`, [updatedTitle, updatedContent, updatedImage, id], (err) => {
                db.all("SELECT * FROM articles WHERE article_id = ?", [id], (err, articles) => {
                    res.status(200).send(articles)
                });
            });
        db.close();
    }
}