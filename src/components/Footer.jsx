import React from 'react';

export default function Footer(props) {
  return (
    <div className="row fixed-bottom">
      {}
      <button
        className="btn btn-danger btn-sm col-3 py-2"
        onClick={() => {
          props.resetQuantity();
        }}
      >
        Reset
      </button>

      {}
      <button className="btn btn-primary btn-sm col-3 py-2 ml-auto">
        Pay Now
      </button>
    </div>
  );
}

