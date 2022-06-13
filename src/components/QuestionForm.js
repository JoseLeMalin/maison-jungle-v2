import { useState } from "react";
import * as React from "react";
function QuestionForm() {
  const [inputValue, setInputValue] = useState("Posez votre question ici");
  return (
    <div>
      <textarea
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
    </div>
  );
  function handleChange(eventText) {
    const error = eventText.includes("f");
    if (!error) {
      setInputValue(eventText);
    }
  }
}

export default QuestionForm;
