import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";

const QuestionForm = () => {
  const [inputValue, setInputValue] = useState("Posez votre question ici");

  const handleChange = (eventText) => {
    const error = eventText.includes("f");
    if (!error) {
      setInputValue(eventText);
    }
  };
  return (
    <Box>
      <textarea
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
    </Box>
  );
};

export default QuestionForm;
