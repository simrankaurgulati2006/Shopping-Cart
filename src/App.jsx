import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProductList from './components/ProductList';
import React, { useState } from 'react';
import AddItem from './components/AddItem';


function App() {

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

 
  const [productList, setProductList] = useState(initialProductList);
  
  
  const [totalAmount, setTotalAmount] = useState(0);

  
  const incrementQuantity = (index) => {
    const newProductList = [...productList];
    newProductList[index].quantity++;
    
  
    const newTotalAmount = totalAmount + newProductList[index].price;
    setTotalAmount(newTotalAmount);
    
    setProductList(newProductList);
  };

  
  const decrementQuantity = (index) => {
    const newProductList = [...productList];
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      
     
      const newTotalAmount = totalAmount - newProductList[index].price;
      setTotalAmount(newTotalAmount);
      setProductList(newProductList);
    }
  };

  
  const resetQuantity = () => {
    const newProductList = [...productList];
    
    
    newProductList.forEach(product => product.quantity = 0);
    
  
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
  const addItem =(name,price) => {
    let newProductList =[...productLit];
    newProductList.push({
      price:price,
      name:name,
      quantity:0
    });
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar />
      <main className="container">
        <AddItem addItem={addItem}/>
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
