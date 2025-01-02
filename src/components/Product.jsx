import React from 'react'

export default function Product({ name, price, quantity }) {
  return (
    <div className="row">
      <div className="col-12">
        <h2>{name}</h2>
        <p><strong>Price:</strong> ${price}</p>
        <p><strong>Quantity:</strong> {quantity}</p>
      </div>
    </div>
  );
}

