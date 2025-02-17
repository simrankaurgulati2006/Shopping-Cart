import React, { Component } from 'react';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",    
      productPrice: 0,    
      items: [],          
    };
  }

 
  handleSubmit = (e) => {
    e.preventDefault(); 

    const { productName, productPrice } = this.state;

  
    if (productName && productPrice > 0) {
      
      this.setState((prevState) => ({
        items: [...prevState.items, { productName, productPrice }],
      }));

      
      this.setState({ productName: "", productPrice: 0 });
    }
  };

  
  handlePriceChange = (e) => {
    const price = e.target.value ? parseFloat(e.target.value) : 0;
    this.setState({ productPrice: price });
  };

  render() {
    return (
      <div className="container mt-5">
        {/* Form to add new item */}
        <form className="row mb-5" onSubmit={this.handleSubmit}>
          <div className="row mb-4">
            {/* Product Name Input */}
            <div className="mb-3 col-6">
              <label htmlFor="inputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                value={this.state.productName}
                onChange={(e) => this.setState({ productName: e.target.value })}
                aria-describedby="nameHelp"
              />
            </div>

            {}
            <div className="mb-3 col-6">
              <label htmlFor="inputPrice" className="form-label">
                Price
              </label>
              <input
                type="number" 
                className="form-control"
                id="inputPrice"
                value={this.state.productPrice || ""}
                onChange={this.handlePriceChange}
                aria-describedby="priceHelp"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary col-4">
            Add Item
          </button>
        </form>

        {/* Displaying the list of items */}
        <h3 className="mt-5">Items List</h3>
        <ul className="list-group">
          {this.state.items.map((item, index) => (
            <li key={index} className="list-group-item">
              {item.productName} - ₹{item.productPrice.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AddItem;
