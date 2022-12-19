
import * as React from "react";
import { useEffect, useState, Fragment } from "react";
import "../styles/App.css";
import Banner from "./Banner";
import Cart from "./Cart";
import Footer from "./Footer";
import QuestionForm from "./QuestionForm";
import ShoppingList from "./ShoppingList";
import User from "./User";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const App = () => {
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
      //padding: theme.spacing(3),
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

  // https://v5.reactrouter.com/web/guides/quick-start
  return (
    <Fragment>
      <CssBaseline />
      <Container
        sx={{
          display: { xs: "flex", md: "flex" },
        }}
        maxWidth={"xl"}
        fixed
      >
        <Box
          className="App"
          sx={{ display: "flex" }}
          border={10}
          borderColor={"red"}
        >
          <Router>
            <Box className="App-header">
              <Banner cartOpened={cartOpened} setCartOpened={setCartOpened} />
            </Box>
            <Box className="App-container" border={10} borderColor={"pink"}>
              <Cart
                cart={cart}
                setCart={setCart}
                cartOpened={cartOpened}
                setCartOpened={setCartOpened}
              />
              <Main
                className="App-body"
                open={cartOpened}
                sx={{ display: "flex" }}
              >
                <Routes>
                  <Route
                    path="/ShoppingList"
                    element={<ShoppingList cart={cart} setCart={setCart} />}
                  ></Route>
                  <Route path="/user" element={<User />}></Route>
                  <Route
                    path="/"
                    element={
                      <Home
                        cart={cart}
                        setCart={setCart}
                        cartOpened={cartOpened}
                      />
                    }
                  ></Route>
                </Routes>
                <QuestionForm sx={{ display: "flex" }} />
              </Main>
              <Box sx={{ display: "flex" }}>
                <button
                  type="button"
                  value={footerDisplay}
                  onClick={() => setDisplayFooter(!footerDisplay)}
                >
                  {footerDisplay ? "Hide Footer" : "Display Footer"}
                </button>
                {footerDisplay && <Footer />}
              </Box>
            </Box>
          </Router>
        </Box>
      </Container>
    </Fragment>
  );
}

export default App;
