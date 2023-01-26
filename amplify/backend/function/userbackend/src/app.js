const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

app.get('/user', function(req, res) {
  // get all users
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/user/{id}', function(req, res) {
  // get a user by the id
  res.json({success: 'get call succeed!', url: req.url});
});

app.post('/user', function(req, res) {
  // Add a user during registration
  res.json({success: 'user added!', url: req.url, body: req.body})
});

app.delete('/user/{id}', function(req, res) {
  // delete user
  res.json({success: 'deleted user!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
