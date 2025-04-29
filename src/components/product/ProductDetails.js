import React, { useState } from "react";
import AddButton from "./AddButton.js";
import "./ProductDetails.css";

export default function ProductDetails(props) {
  const [isOpen, setIsOpen] = useState(true); 
    const {onClick}= props;
    const {product}=props;

  if (!product) return null; 
  return (
    <div className={`Product-details ${isOpen ? "open" : "closed"}`}>
      <div className="Product-details-content">
        <span className="close-btn" onClick={onClick}>&times;</span>
        <h2>{product.name}</h2>
        <div>
          <img src={product.image} alt={product.name} />
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