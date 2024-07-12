import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import products from "./products";

const Products: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="products">
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product">
          <div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
          <button
            onClick={() => dispatch(addItem({ ...product, quantity: 1 }))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
