const Product = require('../models/ProductModel');

class ProductController {
    // Implement your CRUD methods here
    // For example:

    // Create a new product
    async createProduct(req, res) {
        try {
            // Extract the product data from the request body
            const { name, price, description, image, quantity } = req.body;

            // Save the product to the database
            const newProduct = await Product.create({ name, price, description, image, quantity });

            // Return the newly created product as the response
            res.status(201).json(newProduct);
        } catch (error) {
            // Handle any errors that occur during the creation process
            res.status(500).json({ error: 'Failed to create product' });
        }
    }

    // Read all products
    async getAllProducts(req, res) {
        try {
            // Retrieve all products from the database
            const products = await Product.findAll();

            // Return the products as the response
            res.json(products);
        } catch (error) {
            // Handle any errors that occur during the retrieval process
            console.log(error);
            res.status(500).json({ error: 'Failed to retrieve products', message: error.message });
        }
    }

    // Update a product
    async updateProduct(req, res) {
        try {
            // Extract the product ID from the request parameters
            const { id } = req.params;

            // Extract the updated product data from the request body
            const { name, price, description } = req.body;

            // Perform any necessary validation or data manipulation

            // Find the product in the database and update its data
            const updatedProduct = await Product.findByIdAndUpdate(id, { name, price, description }, { new: true });

            // Return the updated product as the response
            res.json(updatedProduct);
        } catch (error) {
            // Handle any errors that occur during the update process
            res.status(500).json({ error: 'Failed to update product' });
        }
    }

    // Delete a product
    async deleteProduct(req, res) {
        try {
            // Extract the product ID from the request parameters
            const { id } = req.params;

            // Find the product in the database and delete it
            await Product.findByIdAndDelete(id);

            // Return a success message as the response
            res.json({ message: 'Product deleted successfully' });
        } catch (error) {
            // Handle any errors that occur during the deletion process
            res.status(500).json({ error: 'Failed to delete product' });
        }
    }
}

module.exports = new ProductController();