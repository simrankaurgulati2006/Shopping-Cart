import React, { Component } from 'react';

class AddItem extends Component {
  render() {
    return (
      <div className="container mt-5"> {/* Added a container with margin-top */}
        <form>
          {/* Name Input Section */}
          <div className="mb-3">
            <label htmlFor="inputName" className="form-label">
              NAME
            </label>
            <input
              type="text" // Changed from email to text for name input
              className="form-control"
              id="inputName"
              aria-describedby="nameHelp" // Changed to a more meaningful ID
            />
            {/* Optional Help text */}
            <div id="nameHelp" className="form-text">
              Enter your full name.
            </div>
          </div>

          {/* Contact Number Input Section */}
          <div className="mb-3">
            <label htmlFor="inputNumber" className="form-label">
              CONTACT NUMBER
            </label>
            <input
              type="tel" // Changed from number to tel for contact numbers
              className="form-control"
              id="inputNumber"
              aria-describedby="numberHelp" // Changed to a more meaningful ID
            />
            {/* Optional Help text */}
            <div id="numberHelp" className="form-text">
              Enter a valid contact number.
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;
