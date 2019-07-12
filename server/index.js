const express = require('express');
const session = require('express-session');
const aticleContorller = require('./controllers/articleController');
const authController = require('./controllers/authController');
const adminContoller = require('./controllers/adminController');
const app = express();
const init = require('./controllers/init.js')

// init.initDB();

app.use(express.json());
app.use(session({
    secret: '978675645ersfcgvhu9y8t7r6dt',
    saveUninitialized: false,
    resave: false,
}));

// Middleware
// app.use((req, res, next) => {
//     if(req.session && req.session.user.role !== 'admin'){
//         res.status(404).send("Error")
//     }
// })

// Article Endpoints
app.get('/api/articles', aticleContorller.getAllArticles);
app.get('/api/singleArticle/:id', aticleContorller.getSingleArticles);
app.post('/api/articles', aticleContorller.createArticle);
app.delete('/api/articles/:id', aticleContorller.deleteArticle);
app.put('/api/articles/:id', aticleContorller.updateArticle);

// Session
app.get('/auth/session', (req,res) => res.status(200).send(req.session.user))

// Auth - Vanilla/Editor
app.post('/auth/register', authController.registerUser);
app.post('/auth/login', authController.loginUser);

// Auth - Admin
app.get('/api/allUsers', adminContoller.getAllUsers);
app.put('/api/user/:id', adminContoller.updateUser);
app.delete('/api/user/:id', adminContoller.deleteUser);

app.listen(4000, () => console.log('Listening on port 4000'));