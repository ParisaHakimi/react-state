import React from "react";
import { useState } from "react";

const Product = ({ product: { title, description, cost, initialStock } }) => {
  const [isStock, setIsStock] = useState(initialStock);
  return (
    <div className="wrapper">
      <h2>{title}</h2>
      <p>Description: {description}</p>
      <p>Cost: ${cost}</p>
      <p>In stock: {isStock}</p>
      <button
        onClick={(e) => {
          setIsStock(isStock - 1);
        }}
      >
        Buy {title}
      </button>
    </div>
  );
};

export default Product;
