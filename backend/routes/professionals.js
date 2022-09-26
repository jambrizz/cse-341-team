//This file is to set the routes for the professionals collection

//variable to require express
const express = require('express');

//variable to require the controller
const professionalsController = require('../controllers/professionals');

//variable to require the router
const router = express.Router();

// GET /feed/posts
router.get('./', professionalsController.getData);
//localhost:3000/professionals

//export the router
module.exports = router;