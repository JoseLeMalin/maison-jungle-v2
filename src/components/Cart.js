import * as React from "react";
import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import "../styles/Cart.css";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import CssBaseline from "@mui/material/CssBaseline";
const Cart = ({ cart, setCart, cartOpened, setCartOpened }) => {
  //const [cart, setCart] = useState(0); // Update total price of cart

  const total = cart.reduce(
    (total, currentPlant) =>
      (total += currentPlant.price * currentPlant.amount),
    0
  );

  useEffect(() => {
    document.title = total ? (document.title = `Cart: ${total}€`) : "React App";
  }, [total]);

  const displayCart = () => {
    return cart.map((plant) => {
      return (
        <li key={plant.id}>
          {plant.amount} x {plant.name}: {plant.amount * plant.price}€
          <button type="button" onClick={() => addItem(plant.id)}>
            +
          </button>
          <button type="button" onClick={() => removeItem(plant.id)}>
            -
          </button>
        </li>
      );
    });
  };
  const addItem = (plantId) => {
    let tempCart = cart;
    let index = tempCart.findIndex((plant) => plant.id === plantId);

    tempCart[index].amount = tempCart[index].amount + 1;
    setCart([...tempCart]);
  };

  const removeItem = (plantId) => {
    let tempCart = cart;
    let index = tempCart.findIndex((plant) => plant.id === plantId);
    tempCart[index].amount = tempCart[index].amount - 1;
    if (tempCart[index].amount === 0) {
      tempCart = cart.filter((plant) => plant.id !== plantId);
    }
    setCart([...tempCart]);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  return (
    <Box>
      <CssBaseline />
      <Drawer
        anchor="left"
        open={cartOpened}
        onClose={() => setCartOpened(false)}
        variant="persistent"
        key="DrawerCart"
        sx={{
          width: 240,
          flexShrink: 0,
          position: "relative",
          "& .MuiDrawer-paper": {
            width: 240,
            marginTop: "6.2%",
            // marginTop: "20%",
            boxSizing: "border-box",
          },
        }}
      >
        <DrawerHeader>
          <h2>Panier</h2>
          <div>
            <Button
              className="lmj-cart-toggle-button"
              type="button"
              name="HideCart"
            >
              <CloseIcon onClick={() => setCartOpened(false)} />
            </Button>
          </div>
        </DrawerHeader>
        <Divider />
        <ul>{displayCart()}</ul>

        <div>Total : {total}€</div>
        <div>
          <button
            className="lmj-cart-toggle-button"
            type="button"
            name="EmptyCart"
            onClick={() => setCart([])}
          >
            Empty Cart
          </button>
        </div>
      </Drawer>
    </Box>
  );
};

export default Cart;
//className="lmj-cart"

//return isOpen ? (
//  <div className="lmj-cart">
//    <Button
//      className="lmj-cart-toggle-button"
//      type="button"
//      name="HideCart"
//      onClick={() => setIsOpen(false)}
//    >
//      Close cart
//    </Button>
//    <h2>Panier</h2>
//    <ul>{displayCart()}</ul>
//
//    <div>Total : {total}€</div>
//    <div>
//      <button
//        className="lmj-cart-toggle-button"
//        type="button"
//        name="HideCart"
//        onClick={() => setCart([])}
//      >
//        Empty Cart
//      </button>
//    </div>
//  </div>
//) : (
//  <div className="lmj-cart-closed">
//    <Button type="button" name="HideCart" onClick={() => setIsOpen(true)}>
//      Open cart
//    </Button>
//  </div>
//);
