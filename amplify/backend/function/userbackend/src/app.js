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

const dataAccess = require("./DAL");

app.get('/user', async function(req, res) {
    var users = await dataAccess.DA.getAllUsers();
    console.log(users);
    res.json(users);
});

app.get('/user/{id}', async function(req, res) {
  var user = await dataAccess.DA.getUserById();
    console.log(user);
    res.json(user);
});

app.post('/user', function(req, res) {
  // Add a user during registration
  res.json({success: 'user added!', url: req.url, body: req.body})
});

app.post('/user', (request, response) => {
  const newUser = request.body;
  users.push(newUser);
  response.json(users);
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
