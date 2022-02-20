import React from "react";
import "../css/styles.css";
import SortPopup from "./SortPopup";

function get_rand_color() {
  var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = "0" + color;
  }
  return "#" + color;
}

function Panel() {
  const [windowColor, setColor] = React.useState("#a6cbf5");
  const [colorName, setColorName] = React.useState(windowColor);
  const [activeItem, setActiveItem] = React.useState(0);


  function changeColorName(color, activeItem) {
    setActiveItem(activeItem);
    if (activeItem === 0) {
        setColorName(windowColor);
        return 0;
    } else if (activeItem === 1) {
      const rgbColor = hexToRgb(color);
     let rgba = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
      setColorName(rgba);
    }
  }

  function hexToRgb(color) {
    {
    
      if (color.substring(0, 1) == "#") {
        color = color.substring(1);
      }

      let rgbColor = {};

      /* Grab each pair (channel) of hex values and parse them to ints using hexadecimal decoding */
      rgbColor.r = parseInt(color.substring(0, 2), 16);
      rgbColor.g = parseInt(color.substring(2, 4), 16);
      rgbColor.b = parseInt(color.substring(4), 16);

      return rgbColor;
    }
  }

  const changeColor = () => {
    let color = [];
    color = get_rand_color();
    setColor(color);
    if(activeItem === 1){
      const rgbColor = hexToRgb(color);
      let rgba = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
      setColorName(rgba);
    }else{
    setColorName(color); 
    }
    
  };
  return (
    <div style={{ background: windowColor }} className="bodyStyle">
      <div className="panel">
        <div className="colorBox" style={{ background: windowColor }}></div>
        <h1 className="colorName">{colorName}</h1>
        <button onClick={() => changeColor()} className="colorButton">
          start
        </button>
        <SortPopup
          sortItems={["HEX", "RGB"]}
          onChange={(activeItem) => changeColorName(windowColor, activeItem)}
        />
      </div>
    </div>
  );
}
export default Panel;
