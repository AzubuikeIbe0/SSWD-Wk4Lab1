// Data access functions for products

// Import dependencies
const { PrismaClient } = require('@prisma/client');

// declare an instance of the client
const prisma = new PrismaClient();

// Get all products from DB
//
async function getProducts() {
    // define variable to store products
    let products;

    try {  
        // Get all products
        // https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findmany
        products = await prisma.product.findMany();

    // Catch and log errors to server side console 
    } catch (err) {
        console.log('DB Error - get all products: ', err.message);
    } finally {
      // TODO document why this block is empty
    
      
    }
    // return all products found
    return products;
}

// Get product by id from DB
//
async function getProductById(id) {

    // Define variable
    let product;

    try {
        // use where with findUnique
        product = await prisma.product.findUnique ({
            where: {id: Number(id)}
        });

    // Catch and log errors to server side console 
    } catch (err) {
        console.log('DB Error - get all products: ', err.message);
    } finally {
      // TODO document why this block is empty

    }
    // return a single product if found
    return product;
}


// Export 
module.exports = {
    getProducts,
};
