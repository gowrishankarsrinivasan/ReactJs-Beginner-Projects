import React, { useState } from "react";
import "../binaryToDecimal/binaryToDecimal.css";

const BinaryToDecimal = () => {
  const [binaryInput, setBinaryInput] = useState("");
  const [decimalOutput, setDecimalOutput] = useState("");

  const handleSubmit = () => {
    // Ensure that the input contains only 0s and 1s
    if (/^[01]+$/.test(binaryInput) || binaryInput === "") {
      setDecimalOutput(parseInt(binaryInput, 2).toString(10));
    }
  };

  const handleInputChange = (e) => {
    setBinaryInput(e.target.value);
  };

  return (
    <div className="container">
      <h1>Binary To Decimal Converter</h1>
      <input
        type="text"
        value={binaryInput}
        placeholder="Enter Binary Value"
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Enter</button>
      {decimalOutput && (
        <p>Decimal Equivalent: {decimalOutput}</p>
      )}
    </div>
  );
};

export default BinaryToDecimal;
