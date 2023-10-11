const personController = require('../controllers/personController.js');

const setPersonRoutes = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello from Node.js app and MongoDB!');
    });
    app.post('/person', personController.addPerson);
    app.get('/persons', personController.getAllPersons);
};

module.exports = setPersonRoutes;
