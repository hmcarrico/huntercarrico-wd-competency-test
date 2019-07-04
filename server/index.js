const express = require('express');
const aticleContorller = require('./controllers/articleController');
const app = express();

app.use(express.json());

// Article Endpoints
app.get('/api/articles', aticleContorller.getAllArticles);
app.post('/api/articles', aticleContorller.createArticle);
app.delete('/api/articles/:id', aticleContorller.deleteArticle);
app.put('/api/articles/:id', aticleContorller.updateArticle);

app.listen(4000, () => console.log('Listening on port 3000'));