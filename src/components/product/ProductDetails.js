import React, { useState } from "react";
import AddButton from "./AddButton.js";
import "./ProductDetails.css"; // Import your modal CSS if you have specific styling
import PropTypes from 'prop-types';

export default function ProductDetails(props) {
  const [isOpen, setIsOpen] = useState(true); // State to manage modal open/close
    const {onClick}= props;
    const {product}=props;

  if (!product) return null; // If product is not provided, don't render anything

  return (
    <div className={`Product-details ${isOpen ? "open" : "closed"}`}>
      <div className="Product-details-content">
        <span className="close-btn" onClick={onClick}>&times;</span>
        <h2>{product.name}</h2>
        <div>
          <img src={`${process.env.REACT_APP_PATH}${product.image}`} alt={product.name} />
        </div>
        <p style={{ textAlign: "justify", padding: "10px" }}>{product.desc}</p>
        <div className="priceBtn">
          <div className="priceTxt">₹{product.price}</div>
          <div className="Product-button">
            <AddButton id={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
ProductDetails.propTypes = {
    onClick: PropTypes.func.isRequired,
};