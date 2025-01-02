import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProductList from './components/ProductList';
import React, { useState } from 'react';

function App() {
  // Initialize the productList state with hardcoded products
  const initialProductList = [
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

  // State hook for productList
  const [productList, setProductList] = useState(initialProductList);
  
  // State hook for totalAmount
  const [totalAmount, setTotalAmount] = useState(0);

  // Increment quantity for a specific product and update totalAmount
  const incrementQuantity = (index) => {
    const newProductList = [...productList];
    newProductList[index].quantity++;
    
    // Update the totalAmount by adding the price of the incremented product
    const newTotalAmount = totalAmount + newProductList[index].price;
    setTotalAmount(newTotalAmount);
    
    setProductList(newProductList);
  };

  // Decrement quantity for a specific product and update totalAmount
  const decrementQuantity = (index) => {
    const newProductList = [...productList];
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      
      // Update the totalAmount by subtracting the price of the decremented product
      const newTotalAmount = totalAmount - newProductList[index].price;
      setTotalAmount(newTotalAmount);
      setProductList(newProductList);
    }
  };

  // Reset all quantities and totalAmount
  const resetQuantity = () => {
    const newProductList = [...productList];
    
    // Reset the quantity of all products to 0
    newProductList.forEach(product => product.quantity = 0);
    
    // Reset the totalAmount to 0
    setTotalAmount(0);
    setProductList(newProductList);
  };
  const removeItem=(index) =>{
    let newProductList=[...ProductList];
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index +1,);
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container">
        {/* Pass incrementQuantity and decrementQuantity as props to ProductList */}
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      {/* Pass the totalAmount and resetQuantity to Footer */}
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
