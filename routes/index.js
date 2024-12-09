const express = require('express')
const router = express.Router()
//figure out what code to run in response to a request
//typically based on the url, and the method, GET..


//this route handles get requests
//it renders with dyname data:title...
router.get('/', function(req, res, next) {
    //name of handleader file - name of a template, optonal object with data for templates
    res.render('index',
         { title: 'Feedback Application',
            author: 'Sara',
            timePageLoadedAt: new Date()
    })
    //get request to home page
})

//get requests to the feedback form page
router.get('/feedback-form', function(req, res, next) {

    res.render('student_feedback_form')
})

//post request to submit feeback
//It reads form data sent in the POST request body using req.body
router.post('/submit-feedback', function(req, res, next){
    //accesss data
    //const formData = req.query //for a get request -read tje url query
    const formData = req.body //for a post request
    console.log(formData) //

// After processing the form data, render the 'thank_you' view and pass in the form data   
    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudents: formData['current-student']
    })
})

//exports to be used in the main app.js file
module.exports = router //this line needs to be the very last line