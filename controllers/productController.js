// This is the product controller

// Import router package
const router = require('express').Router();

// Import product service 
const productService = require("../services/productService.js");

// This endpoint will return all product data from the database
router.get('/', async(req, res) => {

    // set content type of response body in the headers
    // As this is defined globally in app.js it can be ommitted from here
    res.setHeader('Content-Type', 'application/json');


    // Get result from the product service
    const result = await productService.getProducts()

    // Send a  response - this app will be a web api so no need to send HTML
    res.json(result);

});

// export
module.exports = router;