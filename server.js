const express = require('express')
const bodyParser = require('body-parser')
const conx = require('./conx')
const usersRoute = require('./routes/usersRouter.js')

var app = express();
const PORT = 5000

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

// to support JSON-encoded bodies
app.use(bodyParser.json());

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }))

// live API routes/middleware
app.use('/users', usersRoute)

// texting route(once user visit the url)
app.get('/', (req, res) => res.send('Hello world'))


app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));

