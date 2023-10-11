const express = require('express');
const { PORT } = require('./config/config.js');
const connectDB = require('./config/db.js');
const setSwagger = require('./config/swagger.js');
const setPersonRoutes = require('./routes/personRoutes.js');

const app = express();
app.use(express.json());

// Set up Swagger
setSwagger(app);

// Connect to DB
connectDB();

// Set up routes
setPersonRoutes(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
