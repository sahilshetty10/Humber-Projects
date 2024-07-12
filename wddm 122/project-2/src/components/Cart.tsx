import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeItem, clearCart } from "../redux/cartSlice";

const Cart: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <div>
              <h3>{item.name}</h3>
              <p>
                ${item.price} x {item.quantity}
              </p>
            </div>
            <div>
              <button onClick={() => dispatch(removeItem(item.id))}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="clear-cart-button"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
