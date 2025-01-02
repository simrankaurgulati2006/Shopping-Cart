# React + Vite
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Shopping Cart App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            color: #333;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        h2 {
            color: #555;
        }
        p {
            font-size: 16px;
            margin-bottom: 10px;
        }
        ul {
            margin-left: 20px;
        }
        code {
            font-family: monospace;
            background-color: #f1f1f1;
            padding: 2px 4px;
            border-radius: 4px;
        }
        .note {
            background-color: #fff3cd;
            padding: 10px;
            border-radius: 5px;
            margin-top: 20px;
            border: 1px solid #ffeeba;
        }
    </style>
</head>
<body>

    <h1>Shopping Cart Application</h1>

    <p>This is a <strong>React</strong> application created using <strong>Vite</strong>. It is a simple shopping cart where users can add products to their cart, view the total price, and interact with the cart functionality. The app demonstrates how to manage the quantity of items in the cart and calculate the total price dynamically as the user adds or removes items.</p>

    <h2>Features</h2>
    <ul>
        <li><strong>Product List</strong>: Displays a list of products with their name, price, and quantity.</li>
        <li><strong>Quantity Management</strong>: Users can increase or decrease the quantity of products in the cart.</li>
        <li><strong>Total Price Calculation</strong>: As users modify the quantity, the app dynamically updates the total price.</li>
        <li><strong>Responsive Design</strong>: Built with <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> to ensure the app is fully responsive on different screen sizes.</li>
        <li><strong>Simple User Interface</strong>: A clean and easy-to-use UI where users can view products, add them to the cart, and modify quantities.</li>
    </ul>

    <h2>Tech Stack</h2>
    <ul>
        <li><strong>React</strong> - A JavaScript library for building user interfaces.</li>
        <li><strong>Vite</strong> - A next-generation build tool that improves development experience with fast hot-reloading and minimal configuration.</li>
        <li><strong>Bootstrap</strong> - A CSS framework for responsive design and easy-to-use components.</li>
        <li><strong>JavaScript (ES6)</strong> - Modern JavaScript syntax and features.</li>
        <li><strong>CSS</strong> - Custom styles for UI adjustments.</li>
    </ul>

    <h2>How to Run the Project Locally</h2>
    <p>Follow the steps below to set up and run this project on your local machine:</p>
    <ol>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone https://github.com/username/repository-name.git</code></pre>
        </li>
        <li><strong>Install dependencies:</strong> Navigate into the project folder and install the required dependencies by running:
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Start the development server:</strong> Once the dependencies are installed, start the server by running:
            <pre><code>npm start</code></pre>
        </li>
        <li>The app will be available at <strong>http://localhost:3000</strong> in your browser.</li>
    </ol>

    <h2>Project Structure</h2>
    <pre><code>
src/
├── components/
│   ├── Footer.jsx      # Footer component
│   ├── Navbar.jsx      # Navbar component
│   ├── ProductList.jsx # Product list component
├── App.css             # Custom styles
├── App.jsx             # Main React component
└── index.js            # Entry point for the app
    </code></pre>

    <h2>App Description</h2>
    <p>The main functionality of the app revolves around adding products to a shopping cart. Each product in the cart has a price and a quantity that can be adjusted using buttons. The total price of the items in the cart is updated dynamically based on the selected quantities.</p>

    <div class="note">
        <strong>Note:</strong> The product list is currently hardcoded. You can easily modify the product list in the <code>App.jsx</code> file.
    </div>

    <h3>Sample Code (App.jsx)</h3>
    <p>The following is a snippet of the code for the <code>App.jsx</code> component:</p>
    <pre><code>
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProductList from './components/ProductList';

function App() {
  const productList = [
    {
      price: 99999,
      name: "Iphone 10s Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10s Max",
      quantity: 0,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="container">
        <ProductList productList={productList} />
      </main>
      <Footer />
    </>
  );
}

export default App;
    </code></pre>

    <h2>Adding Products</h2>
    <p>To add more products to the list, you can modify the <code>productList</code> array in the <code>App.jsx</code> file. Each product should have the following properties:</p>
    <ul>
        <li><strong>name</strong>: Name of the product.</li>
        <li><strong>price</strong>: Price of the product in INR (₹).</li>
        <li><strong>quantity</strong>: Initial quantity of the product (set to 0 by default).</li>
    </ul>

    <h2>Conclusion</h2>
    <p>This React Shopping Cart app demonstrates basic state management, dynamic updates of data, and user interaction. It uses the Vite tool for a faster and more efficient build process while using React to manage the UI. You can easily extend the app by adding more products, creating a user authentication system, or integrating with a real backend for storing cart data.</p>

    <h2>Contributing</h2>
    <p>Feel free to fork this repository and create a pull request with improvements, bug fixes, or new features. If you find any issues, please open an issue in the GitHub repository.</p>

    <h2>License</h2>
    <p>This project is open-source and available under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.</p>

</body>
</html>

