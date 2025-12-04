import { useState } from "react";
import "./style.css";

export default function Color() {
  const [hexColor, setHexColor] = useState("ffffff");
  const [rgbColor, setRgbColor] = useState();
  const [bodyColor, setBodyColor] = useState();

  //   setBodyColor(document.body.style.backgroundColor);

  function genHexColor() {
    // const randomNum = Math.floor(Math.random() * 1000000) + 1;
    const randomNum = Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, "0");
    setHexColor(randomNum);
    setRgbColor("");
    console.log(hexColor);
  }
  //rgb(col1, col2, col3)
  function genRgbColor() {
    const rgb1 = Math.floor(Math.random() * 256);
    const rgb2 = Math.floor(Math.random() * 256);
    const rgb3 = Math.floor(Math.random() * 256);
    const rgbStr = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    setRgbColor(rgbStr);
    setHexColor("");
    console.log(rgbColor);
  }

  return (
    <div
      className="wrapper"
      style={{ backgroundColor: `${rgbColor ? rgbColor : "#" + hexColor}` }}
    >
      <div>
        <button onClick={genHexColor} className="hex-gen">
          Create HEX Color
        </button>
        <button onClick={genRgbColor} className="rgb-gen">
          Create RGB Color
        </button>
        <button className="ran-gen">Generate Random Color</button>
      </div>
    </div>
  );
}
