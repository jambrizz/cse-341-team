//This file is to retrieve data from database

//variable for mongodb in the db folder under connect.js file
const mongodb = require('../db/connect');

//variable to fetch data from the database
const getData = async (req, res, next) => {
    //requesting data from the database
    const result = await mongodb.getDb().db().collection('professionals').find();
    //turns result of request into an array
    result.toArray().then((lists) => {
        //sends back json data
        res.setHeader('Content-Type', 'application/json');
        //sends the first item in the array to the front end
        res.status(200).json(lists[0]);
    });
};

//exports the getData function from above
module.exports = { getData };