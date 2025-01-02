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
