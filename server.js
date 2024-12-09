const express = require('express') //a webserver framworl
const path = require('path') //to handle file paths
const bodyParser = require('body-parser') //for the incoming request

const indexRouter = require('./routes/index.js') //to handle requests

const app = express() //creates the web app server

//enable parsing of post requestt body
app.use(bodyParser.urlencoded({ extended: false }))

//set the location for the files
const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))

//tell app where the views(html files or templates) are
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs') //use handlelebars to generates views

app.use('/', indexRouter) // all  requests to the app will be passed to indexrouter

//start server running
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
})