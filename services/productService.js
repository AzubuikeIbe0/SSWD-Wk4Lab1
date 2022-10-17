// Product service functions

// Import dependencise dataAccess
const productData = require('../dataAccess/productData');

// Import validator
const validate = require('../validators/baseValidators.js');

// Function to get all products
//
async function getProducts() {
    
    // a place holder for now 
    const products = await productData.getProducts();
  
    // return products
    return products;
  }


  // Function to get product by id
//
async function getProductById(id) {
  // validate the id
  const validatedId = validate.validateId(id);

  if (validatedId) {
    // Call the data access function to get product with matching id
    const product = await productData.getProductById(validatedId);

    // return the product
    return product;
  } else {
    return "Invalid product id";
  }
}
  
// Module exports
// expose these functions
module.exports = {
    getProducts
};