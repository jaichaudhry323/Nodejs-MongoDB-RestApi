const express = require('express')
const app = express();

const mongoose = require("mongoose")
require('dotenv/config');

// whenever a req is received here this parser is used necessary to convert incoming req data to json
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
    res.send('We are on home of RestApi using MongoDB')
})

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        console.log("connected to DB")
        console.log(err)
    });

    
// how dowe start listening
app.listen(3000);
