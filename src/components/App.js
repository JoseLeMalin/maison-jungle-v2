import { useState } from "react";
import "../styles/App.css";
import Banner from "./Banner";
import Cart from "./Cart";
import Footer from "./Footer";
import QuestionForm from "./QuestionForm";
import ShoppingList from "./ShoppingList";

function App() {
  const [cart, setCart] = useState([]);
  const [footerDisplay, setDisplayFooter] = useState(true);
  return (
    <div className="App">
      <Banner />
      <div className="lmj-layout-inner">
        <Cart cart={cart} setCart={setCart} />
        <ShoppingList cart={cart} setCart={setCart} />
      </div>
      <QuestionForm />
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
