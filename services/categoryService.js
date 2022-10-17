// Product service functions

// Import dependencise dataAccess
const categoryData = require('../dataAccess/categoryData');

// Function to get all Categories
//
async function getCategories() {
    
    // a place holder for now 
    const categories = await productData.getCategories();
  
    // return Categories
    return categories;
  }
  
// Module exports
// expose these functions
module.exports = {
    getCategories
};