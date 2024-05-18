# ShopControlCenter

## Project Overview

**ShopControlCenter** is a comprehensive web application designed to manage clients, products, and orders for a retail business. This project features both a backend server built with Node.js and Express, and a frontend client built with React. The application facilitates CRUD operations (Create, Read, Update, Delete) for managing clients, products, and orders, with a focus on providing a seamless and efficient user experience.


https://github.com/YeffersonSilva/ShopControlCenter/assets/117882117/aa6581a2-768c-48e0-a11e-e56ee4cdc737





## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Backend Structure](#backend-structure)
- [Frontend Structure](#frontend-structure)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [License](#license)

## Features

- **Client Management:** Add, edit, view, and delete clients.
 

- **Product Management:** Add, edit, view, and delete products.



- **Order Management:** Create new orders, view order details, and delete orders.


- **Authentication:** User authentication and authorization using JWT.


- **Image Uploads:** Support for uploading product images.

- **Responsive Design:** The frontend is designed to be responsive and user-friendly.

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens) for authentication
- Multer for image uploads

### Frontend
- React
- Axios for HTTP requests
- SweetAlert2 for alerts and confirmations
- CSS for styling

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/shop-control-center.git
    cd shop-control-center
    ```

2. **Install dependencies for the backend:**

    ```bash
    cd back-end
    npm install
    ```

3. **Install dependencies for the frontend:**

    ```bash
    cd ../front-end
    npm install
    ```

4. **Start the backend server:**

    ```bash
    cd ../back-end
    npm start
    ```

5. **Start the frontend server:**

    ```bash
    cd ../front-end
    npm start
    ```

## Backend Structure

- **index.js:** Main entry point for the backend server.
- **models:** Contains Mongoose schemas for Clients, Products, and Orders.
- **routes:** Contains route definitions for clients, products, orders, and user authentication.
- **controllers:** Contains logic for handling requests and responses for different routes.
- **middleware:** Contains middleware functions like authentication.

## Frontend Structure

- **src/components:** Contains React components for different parts of the application (e.g., clients, products, orders).
- **src/context:** Contains context and provider for managing authentication state.
- **src/layout:** Contains layout components like Navbar and Sidebar.
- **src/config:** Contains Axios configuration for API requests.
- **src/App.js:** Main entry point for the React application.
- **src/index.js:** Main entry point for rendering the React application.


## API Endpoints

### Clients
- **GET /clients:** Retrieve all clients.
- **GET /clients/:id:** Retrieve a single client by ID.
- **POST /clients:** Add a new client.
- **PUT /clients/:id:** Update a client by ID.
- **DELETE /clients/:id:** Delete a client by ID.

### Products
- **GET /products:** Retrieve all products.
- **GET /products/:id:** Retrieve a single product by ID.
- **POST /products:** Add a new product.
- **PUT /products/:id:** Update a product by ID.
- **DELETE /products/:id:** Delete a product by ID.

### Orders
- **GET /orders:** Retrieve all orders.
- **GET /orders/:id:** Retrieve a single order by ID.
- **POST /orders:** Create a new order.
- **PUT /orders/:id:** Update an order by ID.
- **DELETE /orders/:id:** Delete an order by ID.

### Authentication
- **POST /users/register:** Register a new user.
- **POST /users/login:** Login a user and retrieve a JWT token.

## Usage

1. **Login:** Use the login page to authenticate yourself using your credentials.
2. **Manage Clients:** Navigate to the clients section to add, view, edit, or delete clients.
3. **Manage Products:** Navigate to the products section to add, view, edit, or delete products.
4. **Manage Orders:** Navigate to the orders section to create new orders, view order details, or delete orders.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Feel free to contribute to this project by submitting issues or pull requests. For any questions, you can contact me at [your-email@example.com].
