//variable to hold the express module
const express = require('express');

//variable to hold the body-parser module
//parses the body of the request
const bodyParser = require('body-parser');

//variable to hold the mongodb module
const MongoClient = require('mongodb').MongoClient;

//variable to hold the routes module
//professionals file is the route
const professionalsRoutes = require('/routes/professionals');
const { MongoDBNamespace } = require('mongodb');

//variable to specify the port number
//process.env.PORT is used in production and it is best practice to start using it.
//adding a default port number as a backup
const port = process.env.PORT || 3000;

//variable called app to use the express module
const app = express();


//instruction on what the app should do when it receives a request
app 
    //use the body-parser module to parse the body of the request
    .use(bodyParser.json())
    .use((req, res, next) => {
        //setHeader sets a single header value for implicit headers
        //(name, value)
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/professionals', professionalsRoutes);

//connect to the database
mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to database and listening on port ${port}`);
    }
});