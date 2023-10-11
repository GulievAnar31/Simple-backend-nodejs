const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config/config.js');

const connectDB = () => {
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.error('Failed to connect to MongoDB', err));
};

module.exports = connectDB;
