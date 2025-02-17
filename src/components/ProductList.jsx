import React from "react";
import Product from "./Product"; 

export default function ProductList(props) {
  
  console.log(props.productList);

  return (
    <div className="container mt-3"> {}
      <h2>Product List</h2>
      <ul className="list-group">
        {}
        {Array.isArray(props.productList) && props.productList.length > 0 ? (
          props.productList.map((product, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{product.name}</strong>
                <span className="badge bg-secondary ms-2">₹{product.price}</span>
              </div>

              <div className="d-flex align-items-center">
                <div className="btn-group me-2" role="group" aria-label="Product Quantity Controls">
                  {}
                  <button type="button" className="btn btn-danger" onClick={() => props.decrementQuantity(index)}>
                    -
                  </button>
                  {}
                  <button type="button" className="btn btn-warning">
                    {product.quantity}
                  </button>
                  {}
                  <button type="button" className="btn btn-success" onClick={() => props.incrementQuantity(index)}>
                    +
                  </button>
                </div>

                <div className="col-4">
                  <strong>Total: ₹{product.quantity * product.price}</strong>
                </div>
                {/}
      <div className="col-5 d-flex justify-content-center align-items-center">
        <button className="btn btn-danger">
          Remove
        </button>
      </div>
              </div>
            </li>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </ul>
    </div>
  );
}

