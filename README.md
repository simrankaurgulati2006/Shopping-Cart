# React + Vite
# Shopping Cart Application

This is a **React** application created using **Vite**. It is a simple shopping cart where users can add products to their cart, view the total price, and interact with the cart functionality. The app demonstrates how to manage the quantity of items in the cart and calculate the total price dynamically as the user adds or removes items.

## Features

- **Product List**: Displays a list of products with their name, price, and quantity.
- **Quantity Management**: Users can increase or decrease the quantity of products in the cart.
- **Total Price Calculation**: As users modify the quantity, the app dynamically updates the total price.
- **Responsive Design**: Built with [Bootstrap](https://getbootstrap.com/) to ensure the app is fully responsive on different screen sizes.
- **Simple User Interface**: A clean and easy-to-use UI where users can view products, add them to the cart, and modify quantities.

## Tech Stack

- **React** - A JavaScript library for building user interfaces.
- **Vite** - A next-generation build tool that improves development experience with fast hot-reloading and minimal configuration.
- **Bootstrap** - A CSS framework for responsive design and easy-to-use components.
- **JavaScript (ES6)** - Modern JavaScript syntax and features.
- **CSS** - Custom styles for UI adjustments.

## How to Run the Project Locally

Follow the steps below to set up and run this project on your local machine:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/username/repository-name.git
    ```

2. **Install dependencies**: Navigate into the project folder and install the required dependencies by running:
    ```bash
    npm install
    ```

3. **Start the development server**: Once the dependencies are installed, start the server by running:
    ```bash
    npm start
    ```

4. The app will be available at **http://localhost:3000** in your browser.

## Project Structure

```plaintext
src/
├── components/
│   ├── Footer.jsx      # Footer component
│   ├── Navbar.jsx      # Navbar component
│   ├── ProductList.jsx # Product list component
├── App.css             # Custom styles
├── App.jsx             # Main React component
└── index.js            # Entry point for the app
App Description
The main functionality of the app revolves around adding products to a shopping cart. Each product in the cart has a price and a quantity that can be adjusted using buttons. The total price of the items in the cart is updated dynamically based on the selected quantities.