import React from "react";
import { useContext } from "react";
import { ColorContext } from "../App";
export function AutoColor() {
  // setcolor from colorContext
  const { color, setColor } = useContext(ColorContext);
  //create random color array
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "pink",
    "orange",
    "teal",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const handleClick = () => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };
  return (
    <>
      <button
        className="bg-violet-500 h-10 w-50 rounded-lg px-2 ml-2"
        style={{ backgroundColor: randomColor }}
        onClick={handleClick}
      >
        Random Color
      </button>
    </>
  );
}
