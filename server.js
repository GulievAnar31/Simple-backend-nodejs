const express = require('express');
const mongoose = require('mongoose');
const personController = require('./controllers/personController');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://mongo:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Node.js app and MongoDB!');
});

app.post('/person', personController.addPerson);
app.get('/persons', personController.getAllPersons);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
