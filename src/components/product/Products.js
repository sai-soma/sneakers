import React, { useState } from "react";
import products from "./products.json";
import "./Products.css";
import AddButton from "./AddButton.js";
import ProductDetails from "./ProductDetails.js";

export default function Products() {
  const PATH = process.env.REACT_APP_PATH;
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClick = (value) => {
    setSelectedProduct(value);
  };
  const handleState=()=>{
    setSelectedProduct(null);
  };

  return (
    <div className="Product-container">
      {products &&
        products.map((value) => (
          <div key={value.id} className="Product-items">
            <div>
              <img
                className="Product-img"
                src={`${PATH}${value.image}`}
                alt={value.name}
                onClick={() => handleClick(value)} // Pass a function reference
              />
            </div>
            <h3>{value.name}</h3>
            <p style={{ textAlign: "justify", padding: "10px" }}>
              {value.desc}
            </p>
            <div className="priceBtn">
              <div className="priceTxt">₹{value.price}</div>
              <div className="Product-button">
                <AddButton id={value.id} />
              </div>
            </div>
          </div>
        ))}
{selectedProduct && <ProductDetails product={selectedProduct} onClick={handleState} />}
</div>
  );
}
