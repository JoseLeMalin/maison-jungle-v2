import { useEffect, useState } from "react";
import "../styles/Footer.css";
import * as React from "react";
import Box from "@mui/material/Box";

const Footer = () => {
  const [inputValue, setInputValue] = useState("");

  const checkInputValue = (eventText) => {
    if (!eventText.includes("@")) {
      alert(`Your email address ${eventText} doesn't contain any '@'`);
    }
  };
  useEffect(() => {
    console.log(`Déclenché seulement au 1er render`);
  }, []);
  return (
    <React.Fragment>
      <div>
        <p>Pour les passionné·e·s de plantes 🌿🌱🌵</p>
      </div>
      <div>
        <p>
          Laissez-nous votre mail :
          <textarea
            name="customerEmail"
            placeholder="email@email.com"
            onBlur={(e) => checkInputValue(e.target.value)}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          ></textarea>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
