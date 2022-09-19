require('dotenv').config();
const mongoose = require('mongoose');
const mongoString = process.env.MONGODB_URI;

mongoose.connect(mongoString);

//Database
const database = mongoose.connection;

const connectToMongo = () => {
    database.on('error', (error) => {
        console.log(error)
    })
    database.once('connected', () => {
        console.log('Database Connected');
    })
}

module.exports = connectToMongo;