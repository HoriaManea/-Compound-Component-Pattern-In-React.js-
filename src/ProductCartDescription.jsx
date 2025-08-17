import React from "react";
import { useContext } from "react";
import { CardContext } from "./ProductCart";
function ProductCartDescription({ children, isSelected }) {
  const { isSelected } = useContext(CardContext);
  return isSelected ? <p>{children}</p> : "";
}

export default ProductCartDescription;
