import { useEffect, useState } from "react";
import "../styles/App.css";
import Banner from "./Banner";
import Cart from "./Cart";
import Footer from "./Footer";
import QuestionForm from "./QuestionForm";
import ShoppingList from "./ShoppingList";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  const [footerDisplay, setDisplayFooter] = useState(true);
  const [cartOpened, setCartOpened] = useState(true);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: `+240px`,
      }),
    })
  );
  return (
    <div className="App">
      <div classsName="App-header">
        <Box sx={{ flexGrow: 1 }}>
          <Banner cartOpened={cartOpened} setCartOpened={setCartOpened} />
        </Box>
      </div>
      <div className="app-body">
        <div classsName="App-cart" flex>
          <Cart
            cart={cart}
            setCart={setCart}
            cartOpened={cartOpened}
            setCartOpened={setCartOpened}
          />
        </div>
        <Main open={cartOpened}>
          <div classsName="app-content" flex>
            <Box sx={{ flexGrow: 1 }}>
              <ShoppingList cart={cart} setCart={setCart} />
            </Box>
            <QuestionForm />
          </div>
        </Main>
      </div>
      <div>
        <button
          type="button"
          value={footerDisplay}
          onClick={() => setDisplayFooter(!footerDisplay)}
        >
          {footerDisplay ? "Hide Footer" : "Display Footer"}
        </button>
        {footerDisplay && <Footer />}
      </div>
    </div>
  );
}

export default App;
