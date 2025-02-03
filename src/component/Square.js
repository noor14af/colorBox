import React, { useEffect } from "react";
import ColorHash from "color-hash";
const Square = ({ colorValue, textColor }) => {
  let colorHash = new ColorHash();
  return (
    <div
      className="square"
      style={{
        backgroundColor: colorValue,
      }}
    >
      <div
        style={{
          color: textColor,
        }}
      >
        <h1 className="upperC">{colorValue ? colorValue : "white"}</h1>
        <h1>{colorValue ? colorHash.hex(colorValue) : ""}</h1>
      </div>
    </div>
  );
};

export default Square;
