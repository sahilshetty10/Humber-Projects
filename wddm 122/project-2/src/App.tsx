import React from "react";
import Cart from "./components/Cart";
import Product from "./components/Product";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>My Shopping Cart</h1>
      <Product />
      <Cart />
    </div>
  );
};

export default App;
