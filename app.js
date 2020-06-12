const express = require('express')
const app = express();

const mongoose = require("mongoose")
require('dotenv/config');


// mongodb+srv://jai:<password>@cluster0-x9ijr.mongodb.net/<dbname>?retryWrites=true&w=majority
// mongodb+srv://jai:abcd@cluster0-x9ijr.mongodb.net/restdb?retryWrites=true&w=majority

// Routes
app.get('/', (req, res) => {
    res.send('We are on home')
})

app.get('/posts', (req, res) => {
    res.send("We are on posts")
})


//Connet to DB
// idk ? ->  runs only once when we do npm start 
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("connected to DB")
    });


// how dowe start listening
app.listen(3000);