import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function checkInputValue(eventText) {
    if (!eventText.includes("@")) {
      alert(`Your email address ${eventText} doesn't contain any '@'`);
    }
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">
        Laissez-nous votre mail :
        <textarea
          name="customerEmail"
          placeholder="email@email.com"
          value={inputValue}
          onBlur={(e) => checkInputValue(e.target.value)}
          onchange={(e) => setInputValue(e.target.value)}
        ></textarea>
      </div>
    </footer>
  );
}

export default Footer;
