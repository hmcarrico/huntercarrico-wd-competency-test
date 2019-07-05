const express = require('express');
const session = require('express-session');
const aticleContorller = require('./controllers/articleController');
const vanillaController = require('./controllers/vanillaController');
const app = express();
const init = require('./controllers/init.js')

// init.initDB();

app.use(express.json());
app.use(session({
    secret: '978675645ersfcgvhu9y8t7r6dt',
    saveUninitialized: false,
    resave: false,
    }));

// Article Endpoints
app.get('/api/articles', aticleContorller.getAllArticles);
app.post('/api/articles', aticleContorller.createArticle);
app.delete('/api/articles/:id', aticleContorller.deleteArticle);
app.put('/api/articles/:id', aticleContorller.updateArticle);

// Session
app.get('/auth/session', (req,res) => res.status(200).send(req.session.user))

// Auth - Vanilla
app.post('/auth/registerVanilla', vanillaController.registerUser);
app.post('/auth/loginVanilla', vanillaController.loginUser);

// Auth - Editor

// Auth - Admin

app.listen(4000, () => console.log('Listening on port 4000'));