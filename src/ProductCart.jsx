import React, { createContext } from "react";
import ProductCardImage from "./ProductCardImage";
import ProductCardTitle from "./ProductCardTitle";
import ProductCartDescription from "./ProductCartDescription";
import { useState, useContext } from "react";

export const CardContext = createContext();

export function ProductCart() {
  const [selected, isSelected] = useState(false);

  return (
    <div
      onClick={() => setIsSelected((curr) => !curr)}
      className={`product-card ${isSelected ? "selected" : ""}`}
    >
      {children}
    </div>
  );
}

ProductCart.Image = ProductCardImage;
ProductCart.Title = ProductCardTitle;
ProductCart.Description = ProductCartDescription;
