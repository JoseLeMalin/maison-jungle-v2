import { useState } from "react";
import "../styles/Cart.css";
function Cart({ cart, setCart }) {
  //const [cart, setCart] = useState(0); // Update total price of cart
  const [isOpen, setIsOpen] = useState(false); // Open/Close cart

  function displayCart() {
    return cart.map((plant) => {
      return (
        <li>
          {plant.amount} x {plant.name}: {plant.amount * plant.price}€
        </li>
      );
    });
  }

  function displayTotal() {
    if (!cart.length) return 0;
    return cart.reduce((total, currentPlant) => {
      total += currentPlant.price * currentPlant.amount;

      return total;
    }, 0);
  }

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        type="button"
        name="HideCart"
        onClick={() => setIsOpen(false)}
      >
        Close cart
      </button>
      <h2>Panier</h2>
      <ul>{displayCart()}</ul>

      <div>Total : {displayTotal()}€</div>
      <div>
        <button
          className="lmj-cart-toggle-button"
          type="button"
          name="HideCart"
          onClick={() => setCart([])}
        >
          Empty Cart
        </button>
      </div>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button type="button" name="HideCart" onClick={() => setIsOpen(true)}>
        Open cart
      </button>
    </div>
  );
}

export default Cart;
