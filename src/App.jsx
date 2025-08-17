import "./App.css";
import { ProductCart } from "./ProductCart";

function App() {
  return (
    <>
      <ProductCart>
        <ProductCart.Title>Nike Air</ProductCart.Title>
        <ProductCart.Image src={nikeImage} alt="Nike"></ProductCart.Image>
        <ProductCart.Description>Men's Shoes</ProductCart.Description>
      </ProductCart>
    </>
  );
}

export default App;
