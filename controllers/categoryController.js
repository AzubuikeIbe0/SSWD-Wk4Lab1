// This is the category controller

// Import router package
const router = require('express').Router();

// Import category service 
const categorieservice = require("../services/categoryService.js");

// This endpoint will return all category data from the database
router.get('/', async(req, res) => {

    // set content type of response body in the headers
    // As this is defined globally in app.js it can be ommitted from here
    res.setHeader('Content-Type', 'application/json');


    // Get result from the category service
    const result = await categoryService.getCategories()

    // Send a  response - this app will be a web api so no need to send HTML
    res.json(result);

});

// export
module.exports = router;