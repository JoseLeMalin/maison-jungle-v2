import { useEffect, useState } from "react";
import "../styles/Cart.css";
function Cart({ cart, setCart }) {
  //const [cart, setCart] = useState(0); // Update total price of cart
  const [isOpen, setIsOpen] = useState(false); // Open/Close cart

  const total = cart.reduce(
    (total, currentPlant) =>
      (total += currentPlant.price * currentPlant.amount),
    0
  );

  useEffect(() => {
    document.title = total ? (document.title = `Cart: ${total}€`) : "React App";
  }, [total]);

  function displayCart() {
    return cart.map((plant) => {
      return (
        <li key={plant.id}>
          {plant.amount} x {plant.name}: {plant.amount * plant.price}€
        </li>
      );
    });
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

      <div>Total : {total}€</div>
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
