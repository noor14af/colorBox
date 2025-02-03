import React, { useState } from "react";
const Input = ({ colorValue, setColorValue, setTextColor, textColor }) => {
  // eslint-disable-next-line no-undef
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleToggle = (e) => {
    setTextColor(textColor === "black" ? "white" : "black");
  };
  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add color Name"
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
          className="inputText"
        />
        <button type="submit" onClick={handleToggle}>
          Toggle Text Color
        </button>
      </form>
    </div>
  );
};

export default Input;
