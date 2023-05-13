const express = require('express');
const app = express();

const cors = require('cors');
const path = require('path');

// Set cors options
const whitelist = ["http://127.0.0.1:5555", "http://localhost:3000"];
const corsOption = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not Allowed Origin!"));
        }
    },
};
app.use(cors());

// Set static files such as image, css, js, html..
app.use(express.static(path.join(__dirname, 'views')));

// Set EJS as template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Seperate routes
const myMain = require('./routes/mainRt');
app.use('/main', myMain);

// Default page
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/views/tabOrder.html');
});

// Listen http with port
app.listen(3000, () => {
  console.log('Server started on port 3000');
});