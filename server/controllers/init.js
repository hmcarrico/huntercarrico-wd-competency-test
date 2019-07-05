const sqlite3 = require('sqlite3')

module.exports = {
initDB: (req, res) => {
        let db = new sqlite3.Database("./database.sqlite3", (err) => { 
            if (err) { 
                console.log('Error when creating the database', err) 
            } else { 
                console.log('Database created!') 
                createTable()
            } 
        })

        const createTable = () => {
            console.log("creating table contacts -----");
            db.run("CREATE TABLE IF NOT EXISTS articles(title TEXT, content TEXT, category TEXT, user_id INTEGER)",  insertArticleData);
            db.run("CREATE TABLE IF NOT EXISTS users(user_id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, username TEXT, password TEXT, role TEXT)",  insertUserData);
        }

        const insertUserData = () => {
            console.log("inserting data for users -----")
            db.run('INSERT INTO users (email, username, password, role) VALUES (?,?,?,?)', ["hunter@gmail.com", "huntercarrico", "password", "admin"])
        }

        const insertArticleData = () =>{
            console.log("inserting data -----")
            db.run('INSERT INTO articles (title, content, category, user_id) VALUES (?,?,?,?)', ["Article1", "Article1 Content blah blah blah", "Category1", 1]);
            db.run('INSERT INTO articles (title, content, category, user_id) VALUES (?,?,?,?)', ["Article2", "Article2 Content blah blah blah", "Category2", 2]);
            db.run('INSERT INTO articles (title, content, category, user_id) VALUES (?,?,?,?)', ["Article3", "Article3 Content blah blah blah", "Category3", 3]);
        ;
        }
    }
}