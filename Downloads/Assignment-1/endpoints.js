// endpoints.js
const BASE_URL = 'https://api.abay.com'; // Replace with the actual base URL of your API

module.exports = {
    // User Management
    LOGIN: `${BASE_URL}/login`, // POST: User login
    REGISTER: `${BASE_URL}/register`, // POST: User registration

    // Product Management
    GET_PRODUCTS: `${BASE_URL}/products`, // GET: Retrieve all products
    GET_PRODUCT: (productId) => `${BASE_URL}/products/${productId}`, // GET: Retrieve a single product
    CREATE_PRODUCT: `${BASE_URL}/products`, // POST: Create a new product
    UPDATE_PRODUCT: (productId) => `${BASE_URL}/products/${productId}`, // PUT: Update a product
    DELETE_PRODUCT: (productId) => `${BASE_URL}/products/${productId}`, // DELETE: Delete a product

    // Category Management
    GET_CATEGORIES: `${BASE_URL}/categories`, // GET: Retrieve all categories
    GET_CATEGORY: (categoryId) => `${BASE_URL}/categories/${categoryId}`, // GET: Retrieve a single category
    CREATE_CATEGORY: `${BASE_URL}/categories`, // POST: Create a new category
    UPDATE_CATEGORY: (categoryId) => `${BASE_URL}/categories/${categoryId}`, // PUT: Update a category
    DELETE_CATEGORY: (categoryId) => `${BASE_URL}/categories/${categoryId}`, // DELETE: Delete a category

    // Order Management
    CREATE_ORDER: `${BASE_URL}/orders`, // POST: Create a new order
    GET_ORDERS: `${BASE_URL}/orders`, // GET: Retrieve all orders
    GET_ORDER: (orderId) => `${BASE_URL}/orders/${orderId}`, // GET: Retrieve a single order
    UPDATE_ORDER: (orderId) => `${BASE_URL}/orders/${orderId}`, // PUT: Update an order
    DELETE_ORDER: (orderId) => `${BASE_URL}/orders/${orderId}`, // DELETE: Delete an order

    // Product Search
    SEARCH_PRODUCTS: `${BASE_URL}/products/search`, // GET: Search for products
};