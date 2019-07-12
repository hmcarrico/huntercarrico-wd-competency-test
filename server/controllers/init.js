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
            console.log("creating table articles -----");
            db.run('CREATE TABLE IF NOT EXISTS articles(article_id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, category TEXT, image TEXT, user_id INTEGER)',  insertArticleData);

            db.run("CREATE TABLE IF NOT EXISTS users(user_id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, username TEXT, password TEXT, role TEXT)",  insertUserData);
        }

        const insertUserData = () => {
            console.log("inserting data for users -----")
            db.run('INSERT INTO users (email, username, password, role) VALUES (?,?,?,?)', ["hunter@gmail.com", "huntercarrico", "password", "admin"])
        }

        const insertArticleData = () =>{
            console.log("inserting data -----")
            // Politics
            db.run('INSERT INTO articles (title, content, category, image, user_id) VALUES (?,?,?,?,?)', ["Politics Article1", "Article1 Content blah blah blah", "politics", "https://endeavors.unc.edu/wp-content/uploads/Politics-Graphic_Final.jpg", 1]);
            db.run('INSERT INTO articles (title, content, category, image, user_id) VALUES (?,?,?,?,?)', ["Politics Article2", "Article2 Content blah blah blah", "politics", "https://endeavors.unc.edu/wp-content/uploads/Politics-Graphic_Final.jpg", 1]);
            db.run('INSERT INTO articles (title, content, category, image, user_id) VALUES (?,?,?,?,?)', ["Politics Article3", "Article3 Content blah blah blah", "politics", "https://endeavors.unc.edu/wp-content/uploads/Politics-Graphic_Final.jpg", 1]);
            db.run('INSERT INTO articles (title, content, category, image, user_id) VALUES (?,?,?,?,?)', ["Politics Article4", "Article4 Content blah blah blah", "politics", "https://endeavors.unc.edu/wp-content/uploads/Politics-Graphic_Final.jpg", 1]);


            // Entertainment
            db.run('INSERT INTO articles (title, content, category, image, user_id) VALUES (?,?,?,?,?)', ["Entertainment Article1", "Article1 Content blah blah blah", "entertainment", "https://www.manatt.com/Manatt/media/Media/Images/Jumbotron/TV_Screens.jpg?ext=.jpg",  2]);
            db.run('INSERT INTO articles (title, content, category, image, user_id) VALUES (?,?,?,?,?)', ["Entertainment Article2", "Article2 Content blah blah blah", "entertainment", "https://www.manatt.com/Manatt/media/Media/Images/Jumbotron/TV_Screens.jpg?ext=.jpg",  2]);
            db.run('INSERT INTO articles (title, content, category, image, user_id) VALUES (?,?,?,?,?)', ["Entertainment Article3", "Article3 Content blah blah blah", "entertainment", "https://www.manatt.com/Manatt/media/Media/Images/Jumbotron/TV_Screens.jpg?ext=.jpg",  2]);
            db.run('INSERT INTO articles (title, content, category, image, user_id) VALUES (?,?,?,?,?)', ["Entertainment Article4", "Article4 Content blah blah blah", "entertainment", "https://www.manatt.com/Manatt/media/Media/Images/Jumbotron/TV_Screens.jpg?ext=.jpg",  2]);


            // Sports
            db.run('INSERT INTO articles (title, content, category, image, user_id) VALUES (?,?,?,?,?)', ["Sports Article1", "Article1 Content blah blah blah", "sports", "https://www.thinkwy.org/wp-content/uploads/2017/10/hpfulq-1234.jpg", 3]);
            db.run('INSERT INTO articles (title, content, category, image, user_id) VALUES (?,?,?,?,?)', ["Sports Article2", "Article2 Content blah blah blah", "sports", "https://www.thinkwy.org/wp-content/uploads/2017/10/hpfulq-1234.jpg", 3]);
            db.run('INSERT INTO articles (title, content, category, image, user_id) VALUES (?,?,?,?,?)', ["Sports Article3", "Article3 Content blah blah blah", "sports", "https://www.thinkwy.org/wp-content/uploads/2017/10/hpfulq-1234.jpg", 3]);
            db.run('INSERT INTO articles (title, content, category, image, user_id) VALUES (?,?,?,?,?)', ["Sports Article4", "Article4 Content blah blah blah", "sports", "https://www.thinkwy.org/wp-content/uploads/2017/10/hpfulq-1234.jpg", 3]);
        ;
        }
    }
}