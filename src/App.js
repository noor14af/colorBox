import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Square from "./component/Square";
import Input from "./component/Input";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [textColor, setTextColor] = useState("black");

  return (
    <>
      <div className="main">
        <Square colorValue={colorValue} textColor={textColor}/>
        <Input colorValue={colorValue} setColorValue={setColorValue} setTextColor={setTextColor} textColor={textColor}/>
      </div>
    </>
  );
}

export default App;
